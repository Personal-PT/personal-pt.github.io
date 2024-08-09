import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <hr className="my-2 text-neutral-300 sm:mx-auto " />
        <span className="block text-sm text-muted-foreground sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a
            target="_blank"
            className="hover:underline"
          >
            PersonalPT
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
