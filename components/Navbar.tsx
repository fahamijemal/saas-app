import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavItems from "@/components/NavItems";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link href="/">
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
                </div>
            </Link>

            <div className='flex items-center gap-8'>
                <NavItems />

                {/* When the user is signed out, show Sign In button */}
                <SignedOut>
                    <div className='flex items-center gap-2'>
                        <SignInButton>
                            <button className='btn-primary'>Sign In</button>
                        </SignInButton>
                    </div>
                </SignedOut>

                {/* When the user is signed in, show UserButton */}
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
            </div>
        </nav>
    );
};

export default Navbar;
