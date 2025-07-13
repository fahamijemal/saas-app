'use client';

import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('topic') || '';
    const [searchquery, setSearchquery] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchquery) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "topic",
                    value: searchquery,
                });
                router.push(newUrl, { scroll: false });
            } else {
                if (pathname == '/companions') {
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ["topic"],
                    });
                    router.push(newUrl, { scroll: false });
                }
            }
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchquery, router, searchParams, pathname]);

    return (
        <div className='relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit'>
            <Image src='/icons/search.svg' alt='search' width={15} height={15} />
            <input
                placeholder='Search Companions'
                className='outline-none'
                value={searchquery}
                onChange={(e) => setSearchquery(e.target.value)}
            />
        </div>
    );
};

export default SearchInput;
