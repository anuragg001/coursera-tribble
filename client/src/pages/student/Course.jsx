import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const Course = () => {
    return (
        <Card className='overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300'>
            <div className='relative'>
                <img src='https://www.hamedbahram.io/_next/image?url=https://files.stripe.com/links/MDB8YWNjdF8xTEtuWHlMdVBSdmx1d2s0fGZsX2xpdmVfNG9JTGpLcW5jc0h0WWVWaFlrbFBiaGd300bxCeXqGy&w=3840&q=75'
                    className='w-full h-36 object-cover rounded-t-lg' />
            </div>
            <CardContent className='px-5 py-4 space-y-3'>
                <h1 className='hover:underline font-bold text-lg truncate'>Nextjs Complete Course In Hindi</h1>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <Avatar className='h-8 w-8 rounded-full'>
                            <AvatarImage src='https://github.com/shadcn.png' />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h1 className='font-medium text-sm'>James Bond</h1>
                    </div>
                    <Badge className={'bg-blue-500 text-white px-2 py-1 text-xs rounded-full'}>
                        Advance
                    </Badge>
                </div>
                <div className='text-lg font-bold'>
                    <span>₹499</span>
                </div>

            </CardContent>
        </Card>
    )
}

export default Course