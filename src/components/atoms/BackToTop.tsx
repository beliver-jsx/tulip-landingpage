import OutlineText from "../Animation/OutlineText"
const BackToTop = () => {
    const scrollToTop = () => {
        window?.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className=" flex items-center justify-center flex-col h-screen border-2 border-transparent  ">
            <OutlineText onClick={scrollToTop} text="Back to top" classNames=" font-[1000] 4xl:text-[13rem]   3xl:text-[10rem] 2xl:text-[10rem] xl:text-[9rem] lg:text-[9rem] md:text-[5rem] text-[5rem]  text-center cursor-pointer w-full" />
            <p className="text-center text-sm text-gray"> ©️2023 - Richard William</p>
            <p className="text-center text-sm text-gray mt-2 mb-10">Made with ❣️ by Deepak Vishwakarma</p>
            <p className="text-center text-sm text-gray">Thanks for scrolling!</p>
        </div>
    )
}
export default BackToTop

