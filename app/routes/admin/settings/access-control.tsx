import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { getAdminById, getAllAdmins } from "~/api/api";
import { type Admin, AdminColums } from "~/components/colums";
import { DataTable } from "~/components/data-table";

export default function AccessControlSettings() {
  const [selectedUserId, setSelectedUserId] = useState("");
  const tableData: Admin[] = [
    {
      id: "728ed52f",
      roleId: "728ed72f",
      name: "John Doe",
      role: "ADMIN",
      createdAt: "Yesterday",
      email: "f@example.com",
    },
    {
      id: "728ed54f",
      roleId: "722ed52f",
      name: "John Hoe",
      role: "USER",
      createdAt: "Yesterday",
      email: "e@example.com",
    },
  ];

  const {
    data: adminAll,
    isPending: isPendingAll,
    isError: isErrorAll,
  } = useQuery({
    queryKey: ["allAdmins"],
    queryFn: getAllAdmins,
  });

  const {
    data: admin,
    isPending,
    isError,
    error,
  } = useQuery<any, Error>({
    queryKey: ["getAdmin", selectedUserId],
    queryFn: () => getAdminById(selectedUserId),
  });
  if (isError) {
    toast.error(error.message);
  }

  const getAdmin = (adminId: string) => {
    setSelectedUserId(adminId);
  };

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-2xl font-bold tracking-tight">Priviledges</h3>
      <p className="text-muted-foreground">
        Manage user roles and permissions to control access to different parts
        of the application.
      </p>
      <div className="w-full flex items-start gap-6 justify-between">
        <div className="container mx-auto">
          <DataTable
            columns={AdminColums}
            data={tableData}
            sendDetails={getAdmin}
          />
        </div>
        <div className="flex-3/5">
          {isPending ? "loading..." : admin?.email}
        </div>
      </div>
    </div>
  );
}
