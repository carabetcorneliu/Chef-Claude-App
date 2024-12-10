import ChefLogo from "/src/images/chef-claude-icon.png";

const Header = () => {
  return (
    <header className="flex justify-center gap-[15px] items-center py-[15px] shadow bg-white">
      <img src={ChefLogo} alt="chef-claude" style={{ width: "75px" }} />
      <h1 className="text-3xl font-weight-[400] pt-[15px]">Chef Claude</h1>
    </header>
  );
};

export default Header;
