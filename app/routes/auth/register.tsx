import { GalleryVerticalEnd } from "lucide-react";
import { Link } from "react-router";
import RegisterForm from "~/components/register-form";

export default function Register() {
  return (
    <>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Store Inc.
        </Link>
        <RegisterForm />
      </div>
    </>
  );
}
