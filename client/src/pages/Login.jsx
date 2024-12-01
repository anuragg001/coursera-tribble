import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const [signUpInput, setSignUpInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [
    registerUser,
    {
      data: registerData,
      isLoading: registerIsLoading,
      error: registerError,
      isSucces: registerIsSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSucces: loginInSuccess,
    },
  ] = useLoginUserMutation();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;

    if (type == "signup") setSignUpInput({ ...signUpInput, [name]: value });
    else setLoginInput({ ...loginInput, [name]: value });
  };

  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signUpInput : loginInput;
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };
  useEffect(()=>{
    if(registerIsSuccess || registerData){
      toast.sucess(registerData.message || "Registered Successfully")
    }
    if(registerError){
      toast.error(registerError.data.message || "Signup Failed")
    }
    if(loginData){
      toast.success(loginData.message || "Logged In Successfully")
    }
    if(loginError){
      toast.error(loginError.data.message || "Login Failed")
    }
  },[loginIsLoading,registerIsLoading,loginData,registerData,loginError,registerError])

  return (
    <div className="flex items-center justify-center w-full py-20">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="Login">Login</TabsTrigger>
        </TabsList>

        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  name="name"
                  value={signUpInput.name}
                  placeholder="Eg.abc"
                  required="true"
                  onChange={(e) => {
                    changeInputHandler(e, "signup");
                  }}
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="username">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={signUpInput.email}
                  placeholder="eg.abc@.com"
                  required="true"
                  onChange={(e) => {
                    changeInputHandler(e, "signup");
                  }}
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="Password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={signUpInput.password}
                  onChange={(e) => {
                    changeInputHandler(e, "signup");
                  }}
                  placeholder=" Eg.xyz"
                  required="true"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
              disabled={registerIsLoading}
                onClick={() => {
                  handleRegistration("signup");
                }}
              >
                {
                  registerIsLoading ? (
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait ...
                    </>
                  ): "Sign Up"
                }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login with your password here. After saving, you'll be logged
                in.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current" type="email">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  value={loginInput.email}
                  onChange={(e) => {
                    changeInputHandler(e, "login");
                  }}
                  placeholder="eg.abc@.com"
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new" type="password">
                  {" "}
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  value={loginInput.password}
                  onChange={(e) => {
                    changeInputHandler(e, "login");
                  }}
                  placeholder="Eg.xyz"
                  required="true"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
              disabled={loginIsLoading}
                onClick={() => {
                  handleRegistration("login");
                }}
              >
                {
                  loginIsLoading ?(
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please Wait ...
                    </>
                  ):"Login"
                }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
