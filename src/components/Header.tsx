import ChefLogo from "/chef-claude-icon.png";

export default function Header() {
  return (
    <header className="flex justify-center gap-[15px] items-center py-[15px] shadow-header bg-white">
      <img src={ChefLogo} alt="chef-claude" style={{ width: "50px" }} />
      <h1 className="text-xl font-weight-[400] pt-[15px] text-[#1f1f1d]">
        Chef Claude
      </h1>
    </header>
  );
}
