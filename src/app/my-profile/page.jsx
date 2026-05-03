"use client";
import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
const MyProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  return (
    <div className=" gap-2 card-body mx-auto rounded-2xl p-9 max-w-96 flex flex-col items-center shadow-2xl my-5">
      <Avatar className="h-20 w-20">
        <Avatar.Image
          alt="John Doe"
          src={user?.image}
          referrerPolicy="no-referrer"
        />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>

      <h2 className="font-bold text-2xl">{user?.name}</h2>
      <p className="text-gray-400">{user?.email}</p>
      <UpdateUserModal/>
    </div>
  );
};

export default MyProfilePage;
