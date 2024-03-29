"use client";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

interface UserProps {
  currentUser: User | null | undefined;
}
const User: React.FC<UserProps> = ({ currentUser }) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  console.log(currentUser, "currentUser");

  const menuFunc = (type: any) => {
    setOpenMenu(false);
    if (type == "logout") {
      signOut();
      router.push("/login");
    } else if (type == "register") {
      router.push("/register");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="hidden md:flex relative hover:bg-orange-500 rounded-md p-1">
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="flex items-center gap-1 cursor-pointer"
      >
        <AiOutlineUser size="25" />
        <div>{currentUser ? currentUser.name : "User"}</div>
      </div>
      {openMenu && (
        <div className="absolute w-[150px] top-10 bg-white shadow-lg right-0 p-2 rounded-md">
          {currentUser ? (
            <div className="space-y-1 ">
              <div
                onClick={() => router.push("/admin")}
                className="text-slate-600 cursor-pointer  hover:bg-gray-200 rounded-md ml-2 p-1 "
              >
                Admin
              </div>
              <div
                onClick={() => menuFunc("logout")}
                className="text-slate-600 cursor-pointer  hover:bg-gray-200 rounded-md ml-2 p-1"
              >
                Logout
              </div>
            </div>
          ) : (
            <div>
              <div
                onClick={() => menuFunc("register")}
                className="text-slate-600 cursor-pointer  hover:bg-gray-200 rounded-md ml-2"
              >
                <p className="p-1 text-center">Register</p>
              </div>
              <div
                onClick={() => menuFunc("login")}
                className="text-slate-600 hover:bg-gray-200 rounded-md ml-2 cursor-pointer"
              >
                <p className="p-1 text-center">Login</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default User;
