import logo from "../assets/logo.png"
export function NavBar() {
  return (<nav class="nav font-semibold text-lg">

    <ul class="flex justify-between">
      <div class='flex flex-row'>
        <li class="ml-[50px] p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
          <a href="/" class="grid place-items-center h-[100%]">
            <p  >Home</p>
          </a>
        </li>
        <li class="ml-[50px] p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
          <a href="/sites" class="grid place-items-center h-[100%]">
            <p >Sites</p>
          </a>
        </li>
        <li class="ml-[50px] p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
          <a href="/vip" class="grid place-items-center h-[100%]">
            <p >VIP</p>
          </a>
        </li>
      </div>

      <div class="flex">
        <li class="ml-[50px] p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
          <a href="/login" class="grid place-items-center h-[100%]">
            <p >Log In</p>
          </a>
        </li>
        <li class="ml-[50px] p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
          <a href="/signup" class="grid place-items-center h-[100%]">
            <p >Sign up</p>
          </a>
        </li>
        <li class="w-[150px] p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
        <a href="/" class="grid place-items-center h-[100%]">
          <img src={logo} class="w-[150px] h-[40px]`"></img>
          </a>
        </li>
      </div>

    </ul>
  </nav>);


}