"use client"
import { useInView } from "framer-motion"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { useRef } from "react"

const PHONES = [
    "/public/testimonials/1.jpg",
    "/public/testimonials/2.jpg",
    "/public/testimonials/3.jpg",
    "/public/testimonials/4.jpg",
    "/public/testimonials/5.jpg",
    "/public/testimonials/6.jpg",
   
]

function splitArray<T>(array: Array<T>, numParts: number) {
    const result: Array<Array<T>> = []

    for (let i = 0; i < array.length; i++){
        const index = 1 % numParts

        if (!result[index]) {
            result[index] = []
        }

        result[index].push(array[i])
   }
}


export function ReviewsGrid() {
    const containerRef = useRef<HTMLDivElement | null>(null)

    const isInView = useInView(containerRef, { once: true, amount: 0.4 })

    const columns = splitArray(PHONES, 3)


    return 
    <div ref={containerRef} className='relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3'>

    </div>


}

export function Reviews() {
    return 
    <MaxWidthWrapper className="relative max-w-5xl">
        <img aria-hidden="true" src="/what-people-are-buying.png" className="absolute select-none hidden xl:block -left-32 top-1/3" />

       <ReviewsGrid/>
   </MaxWidthWrapper>
 }