import React from 'react'

const BookOverview = ({title, author, genre, rating, total_copies, available_copies, description, color, cover, summary} : Book) => {
  return (
    <section className="flex flex-col-reverse items-center gap-12 sm:gap-32 xl:flex-row xl:gap-8">
      <div className="flex flex-1 flex-col gap-5">
        <h1 className="text-5xl font-semibold text-white md:text-7xl">{title}</h1>

        <div className="mt-7 flex flex-row flex-wrap gap-4 text-xl text-light-100">
          <p>
            By <span className="font-semibold text-light-200">{author}</span>
          </p>

          <p>
            Category{" "}
            <span className="font-semibold text-light-200">{genre}</span>
          </p>

          <div className="flex flex-row gap-1">
            {/* <Image src="/icons/star.svg" alt="star" width={22} height={22} /> */}
            <p>{rating}</p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-4 mt-1">
          <p className="text-xl text-light-100">
            Total Books <span>{total_copies}</span>
          </p>

          <p>
            Available Books 
            <span className="ml-2 font-semibold text-primary">
              {available_copies}

            </span>
          </p>
        </div>

        <p className="mt-2 text-justify text-xl text-light-100">{description}</p>
      </div>

      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          {/* <BookCover
            variant="wide"
            className="z-10"
            coverColor={coverColor}
            coverImage={coverUrl}
          /> */}

          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            {/* <BookCover
              variant="wide"
              coverColor={coverColor}
              coverImage={coverUrl}
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookOverview