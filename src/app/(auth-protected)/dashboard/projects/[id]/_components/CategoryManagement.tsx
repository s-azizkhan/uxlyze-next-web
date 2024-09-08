"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Edit02Icon, PlusSignIcon, ToolsIcon } from "hugeicons-react";
import Link from "next/link";
import BlankCategoryCard from "./BlankCategoryCard";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconCategory, IconTrash } from "@tabler/icons-react";
import Image from "next/image";

interface Category {
  id: string;
  title: string;
  image?: string;
  description?: string;
}

export default function CategoryManagement({ venueId }: { venueId: string }) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const addCategory = (newCategory: Omit<Category, "id">) => {
    setCategories([
      ...categories,
      { ...newCategory, id: Date.now().toString() },
    ]);
  };

  const updateCategory = (id: string, updatedCategory: Partial<Category>) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id ? { ...cat, ...updatedCategory } : cat
      )
    );
  };

  const deleteCategory = (id: string) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <div className="mt-8 mb-5">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-primary">
          Manage Categories
        </h2>

        <div className="flex items-center gap-2">
          <Link href={`/dashboard/venues/${venueId}`}>
            <Button variant="secondary">
              <ToolsIcon className="mr-2 h-4 w-4" /> Manage Menu
            </Button>
          </Link>

          {categories.length > 0 && (
            <Button onClick={() => setIsAddModalOpen(true)}>
              <PlusSignIcon className="mr-2 h-4 w-4" />
              Add New Category
            </Button>
          )}
        </div>
      </div>
      {categories.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <CardContent className="p-0">
                {category.image ? (
                  <div className="relative h-48">
                    <Image
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                      layout="fill"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <CardTitle className="absolute bottom-4 left-4 text-white text-xl font-bold">
                      <span className="flex items-center">
                        <IconCategory className="mr-2 h-5 w-5" />
                        {category.title}
                      </span>
                    </CardTitle>
                  </div>
                ) : (
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <CardTitle className="text-xl font-bold text-gray-500">
                      <span className="flex items-center">
                        <IconCategory className="mr-2 h-6 w-6" />
                        {category.title}
                      </span>
                    </CardTitle>
                  </div>
                )}
                <div className="p-4">
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {category.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-primary hover:text-primary-dark hover:bg-primary/10 transition-colors"
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsEditModalOpen(true);
                      }}
                    >
                      <Edit02Icon className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors"
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsDeleteModalOpen(true);
                      }}
                    >
                      <IconTrash className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <BlankCategoryCard onAddCategory={() => setIsAddModalOpen(true)} />
      )}

      <AddCategoryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={addCategory}
      />

      <EditCategoryModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        category={selectedCategory}
        onUpdate={updateCategory}
      />

      <DeleteCategoryModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        category={selectedCategory}
        onDelete={deleteCategory}
      />
    </div>
  );
}

interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (category: Omit<Category, "id">) => void;
}

function AddCategoryModal({ isOpen, onClose, onAdd }: AddCategoryModalProps) {
  const [newCategory, setNewCategory] = useState<Omit<Category, "id">>({
    title: "",
    image: "",
    description: "",
  });

  const handleAdd = () => {
    onAdd(newCategory);
    onClose();
    setNewCategory({ title: "", image: "", description: "" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Category</DialogTitle>
        </DialogHeader>
        <Input
          placeholder="Category Title"
          value={newCategory.title}
          onChange={(e) =>
            setNewCategory({ ...newCategory, title: e.target.value })
          }
        />
        <Input
          placeholder="Image URL (optional)"
          value={newCategory.image}
          onChange={(e) =>
            setNewCategory({ ...newCategory, image: e.target.value })
          }
        />
        <Textarea
          placeholder="Description (optional)"
          value={newCategory.description}
          onChange={(e) =>
            setNewCategory({ ...newCategory, description: e.target.value })
          }
        />
        <Button onClick={handleAdd}>Add Category</Button>
      </DialogContent>
    </Dialog>
  );
}

interface EditCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: Category | null;
  onUpdate: (id: string, category: Partial<Category>) => void;
}

function EditCategoryModal({
  isOpen,
  onClose,
  category,
  onUpdate,
}: EditCategoryModalProps) {
  const [editedCategory, setEditedCategory] = useState<Category | null>(
    category
  );

  const handleUpdate = () => {
    if (editedCategory) {
      onUpdate(editedCategory.id, editedCategory);
      onClose();
    }
  };

  if (!editedCategory) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
        </DialogHeader>
        <Input
          value={editedCategory.title}
          onChange={(e) =>
            setEditedCategory({ ...editedCategory, title: e.target.value })
          }
        />
        <Input
          value={editedCategory.image}
          onChange={(e) =>
            setEditedCategory({ ...editedCategory, image: e.target.value })
          }
          placeholder="Image URL"
        />
        <Textarea
          value={editedCategory.description}
          onChange={(e) =>
            setEditedCategory({
              ...editedCategory,
              description: e.target.value,
            })
          }
          placeholder="Description"
        />
        <Button onClick={handleUpdate}>Update Category</Button>
      </DialogContent>
    </Dialog>
  );
}

interface DeleteCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: Category | null;
  onDelete: (id: string) => void;
}

function DeleteCategoryModal({
  isOpen,
  onClose,
  category,
  onDelete,
}: DeleteCategoryModalProps) {
  const handleDelete = () => {
    if (category) {
      onDelete(category.id);
      onClose();
    }
  };

  if (!category) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Category</DialogTitle>
        </DialogHeader>
        <p>Are you sure you want to delete the category "{category.title}"?</p>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
