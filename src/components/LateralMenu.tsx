import { ArrowUpLeftFromSquare, BadgeDollarSign, Flame, Info, Layers, LayoutGrid, LogOut, Package, Settings, StretchHorizontal, Ticket, User, Users } from "lucide-react";
import ButtonLateralMenu from "./ButtonLateralMenu";

type Props = {
    style: boolean
}

export default function LateralMenu(props: Props) {
    return (
        <nav className={`w-xs h-lvh ${props.style ? "fixed" : "hidden"} md:sticky top-0 let-0 bottom-0`}>
            <div className="p-4 md:p-7 w-auto bg-[#E4E7E9] h-lvh text-[#8B8E99]">
                <div className="pb-6 flex gap-2 items-center font-700"><Flame size={32} strokeWidth={0.5} className="text-[#FFC300] fill-[#FFC300]" /> Lynx </div>
                <div className="font-500 flex-col">
                    <article className="gap-1 flex-col">
                        <p className="text-blue">MENU</p>
                        <ButtonLateralMenu href="/"><LayoutGrid /> Dashboard </ButtonLateralMenu>
                        <ButtonLateralMenu href="/"><Package /> Products </ButtonLateralMenu>
                        <ButtonLateralMenu href="/"><Layers /> Category </ButtonLateralMenu>
                        <ButtonLateralMenu href="/"><StretchHorizontal /> Orders </ButtonLateralMenu>
                        <ButtonLateralMenu href="/"><Ticket /> Coupon </ButtonLateralMenu>
                        <ButtonLateralMenu href="/"><ArrowUpLeftFromSquare /> Banner </ButtonLateralMenu>
                        <ButtonLateralMenu href="/"><BadgeDollarSign /> Transaction </ButtonLateralMenu>
                    </article>
                    <article className="flex-col gap-1">
                        <p className="text-blue">USER MANAGEMENT</p>
                        <ButtonLateralMenu href="/"><Users /> Manage Admins </ButtonLateralMenu>
                        <ButtonLateralMenu href="/"><User /> Customers </ButtonLateralMenu>
                    </article>
                    <article className="flex-col gap-1">
                        <p className="text-blue">OTHERS</p>
                        <ButtonLateralMenu href="/"><Settings /> Settings </ButtonLateralMenu>
                        <ButtonLateralMenu href="/"><Info /> Help </ButtonLateralMenu>
                        <ButtonLateralMenu href="/"><LogOut /> Logout </ButtonLateralMenu>
                    </article>
                </div>
            </div>
        </nav>
    )
}