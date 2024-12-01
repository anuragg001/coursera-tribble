import { Book, Cloud, CreditCard, Github, Keyboard, LayoutDashboard, LifeBuoy, LogOut, Mail, Menu, PlusCircle, School, Settings, User, UserPlus, Users } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import DarkMode from '@/DarkMode'
import {
    Sheet, SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet'
import { Separator } from '@radix-ui/react-dropdown-menu'

const Navbar = () => {
    const user = true
    
    return (
        <div className='h-16 dark:bg-[#0A0A0A] bg-white  border-b dark:border-b-gray-800
     border-b-gray-200 fixed top-0 left-0 right-0 z-10 duration-300'>
            {/* Desktop*/}
            <div className='max-w-7xl mx-auto hidden md:flex justify-between items-center h-full gap-10  '>
                <div className='flex items-center gap-2'>
                    <School size={"30"} />
                    <h1 className='hidden md:block font-semibold text-2xl'>Coursera</h1>
                </div>
                <div className='flex items-center gap-8'>
                    {
                        user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <User />
                                            <span> Edit Profile</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Book />
                                            <span>My Learning</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <LogOut />
                                        <span>Log out</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <LayoutDashboard />
                                        <span>DashBoard</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className='flex items-center gap-2'>
                                <Button variant="outline">Login</Button>
                                <Button>Register</Button>
                            </div>
                        )
                    }
                    <DarkMode />
                </div>
            </div>
            {/* Mobile Device */}
            <div className='flex md:hidden items-center justify-between px-4 h-full'>
                <h1 className='font-extrabold text-2xl'>Coursera</h1>
                <MobileNavbar />
            </div>

        </div>
    )
}

export default Navbar

const MobileNavbar = () => {
    const role = "instructor"
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" className='rounded-full bg-gray-200 hover:bg-gray-200' variant="outline">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                <SheetHeader className='flex flex-row justify-between items-center mt-2'>
                    <SheetTitle>Coursera</SheetTitle>
                    <DarkMode />
                </SheetHeader>
                <Separator />
                <nav className='flex flex-col space-y-4 '>
                    <span>My Learning</span>
                    <span>Edit Profile</span>
                    <span>Log Out</span>
                </nav>
                {
                    role === "instructor" && (
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Dashboard</Button>
                            </SheetClose>
                        </SheetFooter>
                    )
                }

            </SheetContent>
        </Sheet>
    )
}