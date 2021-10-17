import { getProviders, signIn } from "next-auth/react";
import Layout from "../../components/Layout/Layout";

const signin = ({ providers }) => {
  return (
    <Layout applyGrid={false}>
      <div className="flex flex-col space-y-3 items-center h-full justify-center max-w-[935px] mx-auto">
        <div className="mt-52">
          <img src="/images/insta.png" alt="" className="h-24" />
        </div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className=" bg-gray-800 text-white text-sm focus:outline-none px-5 py-3 rounded-lg"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
