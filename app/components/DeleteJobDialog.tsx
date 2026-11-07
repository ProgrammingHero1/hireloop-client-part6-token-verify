'use client'
import { Trash2Icon } from "lucide-react"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogMedia,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { JobRow } from "../dashboard/recruiter/jobs/page"

export function DeleteJobDialog({ job }: {job: JobRow}) {

    const handleDelete = () =>{
        console.log( 'deleting ', job._id)
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger
                render={<Button variant="destructive"><Trash2Icon /></Button>}
            />
            <AlertDialogContent size="sm">
                <AlertDialogHeader>
                    <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                        <Trash2Icon />
                    </AlertDialogMedia>
                    <AlertDialogTitle>Delete job?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will permanently delete this job. View{" "}
                        <a href="#">Settings</a> delete any related data.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} variant="destructive">Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
