const ReviewCard = ({cardinfo}) => {
    return (
        <>
            <div className="space-y-3">
                <h1 className="text-lg md:text-lg font-bold">{cardinfo.title}</h1>
                <div className="">
                    <div className="rating rating-sm gap-2">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <p className="text-[12px] md:text-[14px] lg:text-[16px] leading-5 md:leading-7 lg:leading-8 ">{cardinfo.details}</p>
                <div className="flex items-center gap-4">
                    <div>
                        <img className="w-12 h-12 rounded-full" src={cardinfo.img} alt="User Profile Picture" />
                    </div>
                    <div>
                        <h1 className="text-sm md:text-base font-bold ">{cardinfo.auther}</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewCard;