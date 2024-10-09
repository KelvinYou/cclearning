"use client";

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import React from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Menu as MenuIcon } from 'lucide-react'
import { mainMenu } from '@/constants/menu'
import { useRouter } from 'next/navigation';

const UserMenu: React.FC = () => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'} className='rounded-full p-1 h-12 w-[5.25rem] gap-2'>
          <MenuIcon className='size-4' />
          {/* <Avatar className='h-8 w-8'>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> */}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        {/* <DropdownMenuItem onClick={() => {}} className=' cursor-pointer' disabled>
          Sign Up
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => {}} className=' cursor-pointer'>
          Login
        </DropdownMenuItem> */}

        {mainMenu.map((menu) => (
          <DropdownMenuItem key={menu.label} onClick={() => {
            router.push(menu.path)
          }} className=' cursor-pointer'>
            {menu.label}
          </DropdownMenuItem>
        ))}

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserMenu
