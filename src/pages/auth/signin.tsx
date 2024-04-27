import React, {useState} from "react";
import {Card} from "react-daisyui";
import {SignInForm} from "@/components/forms/signin.form";
import {IRSignIn} from "@/type/auth.interface";
import {Images} from "@/utility/images";
import {HotToast} from "@/components/toaster";
import {useNavigate} from "react-router-dom";

export const SignIn: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (data: IRSignIn): Promise<void> => {
    setLoading(true);
    setTimeout(() => {
      if (data.text === "Admin" && data.password === "Admin") {
        setLoading(false);
        navigate("/dashboard");
        HotToast.Success({message: "Logged in to account"});
      } else {
        HotToast.Error({message: "Wrong Crediantials"});
      }
    }, 1000);
  };

  return (
    <div className="grid h-screen place-items-center p-3">
      <div className="mx-auto w-full sm:w-[480px]">
        <Card>
          <Card.Body>
            <div className="text-center mb-5">
              <img src={Images.Logo} alt="..." className="w-28 h-28 mx-auto" />
              <p className="text-3xl font-bold mb-2">Admin</p>
              <p className="text-sm text-slate-500">
                Access the system, using user id & password.
              </p>
            </div>
            <SignInForm loading={isLoading} onSubmit={handleSubmit} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
