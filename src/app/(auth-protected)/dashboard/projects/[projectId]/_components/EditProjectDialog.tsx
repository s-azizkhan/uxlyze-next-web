// import { useProject } from "@/hooks/useProject";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { SelectProject } from "@/db/schema";

// export default function EditProjectDialog({
//   isEditDialogOpen,
//   setIsEditDialogOpen,
//   editedProject,
// }: {
//   isEditDialogOpen: boolean;
//   setIsEditDialogOpen: (open: boolean) => void;
//   editedProject: SelectProject;
// }) {
//   return (
//     <>
//       {/* Edit Dialog */}
//       <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Edit Project</DialogTitle>
//           </DialogHeader>
//           <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap-4">
//               <label htmlFor="name" className="text-right">
//                 Name
//               </label>
//               <Input
//                 id="name"
//                 value={editedProject.name}
//                 onChange={(e) =>
//                   setEditedProject({ ...editedProject, name: e.target.value })
//                 }
//                 className="col-span-3"
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <label htmlFor="type" className="text-right">
//                 Type
//               </label>
//               <Input
//                 id="type"
//                 value={editedProject.type}
//                 onChange={(e) =>
//                   setEditedProject({ ...editedProject, type: e.target.value })
//                 }
//                 className="col-span-3"
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <label htmlFor="description" className="text-right">
//                 Description
//               </label>
//               <Textarea
//                 id="description"
//                 value={editedProject.description}
//                 onChange={(e) =>
//                   setEditedProject({
//                     ...editedProject,
//                     description: e.target.value,
//                   })
//                 }
//                 className="col-span-3"
//               />
//             </div>
//           </div>
//           <DialogFooter>
//             <Button onClick={handleUpdateProject}>Update Project</Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }
