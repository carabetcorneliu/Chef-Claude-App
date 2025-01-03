import ChefLogo from "/chef-claude-icon.png";

export default function Header() {
  return (
    <header className="min-w-[500px] flex justify-center items-center gap-[10px] rounded-[6px] py-[15px] shadow-header bg-white">
      <img src={ChefLogo} alt="chef-claude" style={{ width: "35px" }} />
      <h1 className="sm:text-sm md:text-lg lg:text-lg xl:text-xl font-weight-[400] pt-[10px] text-[#1f1f1d]">
        Chef Claude
      </h1>
    </header>
  );
}
