export default function BackgroundCover({
  loginBanner01,
}: {
  loginBanner01: string;
}) {
  return (
    <div className="absolute top-0 z-[-10] hidden h-screen items-center overflow-hidden sm:flex">
      <img
        src={loginBanner01}
        alt="banner"
        className="h-[100vh] w-[100vw] scale-[1.02] object-cover blur-sm brightness-50 contrast-[0.9]"
      />
    </div>
  );
}
