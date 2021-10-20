import { useSession, signIn, signOut } from "next-auth/client";

import { VscGithubInverted } from "react-icons/vsc";
import { AiFillGoogleCircle } from "react-icons/ai";

import styles from "../styles/App.module.scss";

export default function Home() {
  const [session] = useSession();

  return session ? (
    <div className={styles.appWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.UserInformation}>
          <img
            src={session.user.image}
            alt={session.user.name}
            width={180}
            height={180}
          />
          <h1>{session.user.name}</h1>
        </div>

        <div className={styles.loginInputsWrapper}>
          <button onClick={() => signOut()}>
            <VscGithubInverted size="32" />
            SingOut
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.appWrapper}>
      <div className={styles.contentWrapper}>
        <h1>Hello world</h1>

        <div className={styles.loginInputsWrapper}>
          <button onClick={() => signIn("github")}>
            <VscGithubInverted size="32" />
            Login with GitHub
          </button>
          <button onClick={() => signIn("google")}>
            <AiFillGoogleCircle size="32" />
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
