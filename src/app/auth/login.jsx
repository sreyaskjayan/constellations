import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/login-form"
// import { login } from "@/store/authSlice"
// import { Navigate, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // if (isAuthenticated) {
  //   return <Navigate to="/home" replace />;
  // }

  // const handleLogin = (email, password) => {
  //   // e.preventDefault();
  //   console.log(email,password);
    
  //   if (email && password) {
  //     // dispatch(login());
  //     console.log(email, password);
      
  //     // navigate('/home', { replace: true });
  //   }
  // };
  
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Constellations
        </a>
        <LoginForm />
      </div>
    </div>
  )
}
