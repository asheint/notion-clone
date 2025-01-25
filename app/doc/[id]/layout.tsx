import { auth } from "@clerk/nextjs/server"

async function DocLayout({
    children, params: { id },
}: {
    children: React.ReactNode;
    params: { id: string };
}) {
    const authResult = await auth();
    if (!authResult.userId) {
        authResult.redirectToSignIn();
        return null;
    }
  return (
    <div>{children}</div>
  )
}
export default DocLayout