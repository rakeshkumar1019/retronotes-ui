/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Ellipsis } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

type RetroNotes = {
    id: string,
    user_id: string,
    retro_name: string,
    what_went_well: string[],
    what_went_wrong: string[],
    action_item: string[],
}

type ListRetroNotesProp = {
    retroNotes: RetroNotes[],
    onDelete: (user_id: string, id: string) => void
}


const ListRetroNotes = ({ retroNotes,onDelete }: ListRetroNotesProp) => {
    return (
            <div className="flex flex-wrap p-5 rounded-lg border border-dashed shadow-sm">
                {retroNotes.map((retro,idx) => (
                    <div
                        key={idx}
                        className='rounded-lg border h-[70px] w-[400px] shadow-sm p-5 m-2 cursor-pointer hover:border-slate-400'
                    >
                        <div className='flex justify-between'>
                            <div>{retro?.retro_name}</div>
                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <div className='border border-transparent  px-1 rounded-sm hover:border-gray-400'>
                                           <Ellipsis className="h-4 w-4" />
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem disabled>Edit</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => onDelete(retro?.user_id, retro?.id)}>Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default ListRetroNotes;
