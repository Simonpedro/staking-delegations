import type { NextPage, GetServerSideProps } from "next";
import { getSession, signOut } from "next-auth/react";
import HomeScreen from "components/HomeScreen";
import { useRouter } from "next/dist/client/router";
import prisma from "lib/prisma";
import { fetchDelegationSets } from "lib/delegations";
import { HomeScreenProps } from "components/HomeScreen/HomeScreen";

interface HomeProps {
  user: HomeScreenProps["user"];
  delegationSets: HomeScreenProps["delegationSets"];
}

const Home: NextPage<HomeProps> = ({ user, delegationSets }) => {
  const router = useRouter();

  const handleLogout = () => {
    signOut({ redirect: true });
  };

  const handleUpdateAddress: HomeScreenProps["onUpdateAddresses"] = (addresses) => {
    fetch("api/update-addresses", {
      method: "POST",
      body: JSON.stringify(addresses),
    }).then((res) => {
      if (res.ok) {
        router.reload();
      } else {
        // Show an error in the UI instead
        alert("address couldn't be updated");
      }
    });
  };

  return (
    <HomeScreen
      user={user}
      onLogout={handleLogout}
      onUpdateAddresses={handleUpdateAddress}
      delegationSets={delegationSets}
    />
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  ctx,
) => {
  const session = await getSession({ ctx });

  const loginRedirect = {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };

  if (!session?.user) {
    return loginRedirect;
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true, email: true, name: true, addresses: true },
  });

  if (!user) {
    return loginRedirect;
  }

  return {
    props: {
      user,
      delegationSets: await fetchDelegationSets(user.addresses),
    },
  };
};
