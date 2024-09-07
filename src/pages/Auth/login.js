import { Card, Divider, Image } from "@nextui-org/react";
import React from "react";
import AuthForm from "../../components/common/Forms/AuthForm";

function Login() {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "100vh", width: "100%" }}
    >
      <Card className="sm:w-full lg:w-[500px] md:w-1/3 p-10 box-border flex-col items-center">
        <p className="text-3xl font-semibold mx-3">Welcome to BankDash</p>
        <div className="flex my-5">
          <Card className="p-2 box-border mx-3">
            <div className="flex justify-between">
              <Image src="images/google.png" width={30} height={30} />
              <p className="text-xl font-normal mx-1">Google</p>
            </div>
          </Card>
          <Card className="p-2 box-border mx-3">
            <div className="flex justify-between">
              <Image src="images/facebook.png" width={30} height={30} />
              <p className="text-xl font-normal mx-1">Facebook</p>
            </div>
          </Card>
        </div>
        <div class="relative flex py-5 items-center w-full">
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="flex-shrink mx-4 text-gray-400">Or Continue with</span>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>
        <AuthForm />
      </Card>
    </div>
  );
}

export default Login;
