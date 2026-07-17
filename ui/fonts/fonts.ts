import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });
export const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
export const maiyuan = localFont({
    src: "./KNMaiyuan.ttf",
    display: "swap",
    variable: "--font-maiyuan",
});