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
            <OutlineText onClick={scrollToTop} text="Back to top" classNames="4xl:text-[13rem] font-[1000]  3xl:text-[112px] 2xl:text-[112px] xl:text-[96px] lg:text-[96px] md:text-[80px] text-[52px]  text-center cursor-pointer w-full" />
            <p className="text-center text-sm text-gray"> ©️2023 - Richard William</p>
            <p className="text-center text-sm text-gray mt-2 mb-10">Made with ❣️ by Deepak Vishwakarma</p>
            <p className="text-center text-sm text-gray">Thanks for scrolling!</p>
        </div>
    )
}
export default BackToTop

