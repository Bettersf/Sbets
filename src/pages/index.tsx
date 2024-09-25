// src/pages/index.tsx
import { GambaButton } from "@/components/ui/GambaPlayButton";
import { GameGrid } from "@/components/game/GameGrid";
import { PLATFORM_REFERRAL_FEE } from "@/constants";
import RecentPlays from "@/components/game/RecentPlays/RecentPlays";
import { toast } from "sonner";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

export default function HomePage() {
  const walletModal = useWalletModal();
  const wallet = useWallet();

  const copyInvite = () => {
    if (!wallet.publicKey) {
      return walletModal.setVisible(true);
    }
    const referralLink = `${location.host}?code=${wallet.publicKey.toString()}`;
    navigator.clipboard.writeText(referralLink);
    toast.success(
      `Copied! Share your link to earn a ${
        PLATFORM_REFERRAL_FEE * 100
      }% fee when players use this platform`,
    );
  };
  return (
    <>
      <div className="relative mx-auto flex flex-col gap-5 mt-20 pb-10 px-2.5 transition-all duration-250 ease-in-out sm:px-5 sm:pt-5 md:max-w-6xl">
        {/* Updated container to match BannerContainer styles */}
        <div
          className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between p-10 rounded-2xl bg-black bg-opacity-80"
          style={{
            backgroundImage: "url(/seo.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "441px",  // Fixed height for the container
            minHeight: "350px",  // Minimum height for responsiveness
            borderRadius: "20px",  // Matching border radius
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Darker transparent filter overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10 transform rotate-12 scale-150 blur-xl pointer-events-none"></div>

          {/* Left Side: Text */}
          <div className="lg:w-2/3 text-center lg:text-left z-10">
            <div className="flex items-center justify-center md:justify-start">
              <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-md">
                Welcome to $DIGIPEPE Casino!
              </h1>
              <img src="/" className="h-14" alt="" />
            </div>
            <p className="mt-4 text-white drop-shadow">
              
              CA: 8hHfvoKce1Weh41wJVMky1U8ghwSdnMefeGzZQgf1D2w
            </p>
            <p className="my-2 text-sm max-w-sm">
              Share your link to earn a {PLATFORM_REFERRAL_FEE * 100}% fee on
              each play when players use this platform using your code.
            </p>
            <button
              className="bg-[#8851ff] hover:bg-[#9564ff] rounded-lg p-2 text-xs bg-"
              onClick={copyInvite}
            >
              Copy Link
            </button>
          </div>

          {/* Right Side: Buttons with Wider Red Border and Transparent Black Background */}
          <div className="lg:w-1/3 flex flex-col items-end space-y-3 mt-5 lg:mt-0 z-10">
            <button
              onClick={() =>
                window.open("https://raydium.io/swap/?outputMint=")
              }
              className="rounded-lg p-3 w-full lg:w-64 bg-black bg-opacity-70 border-2 border-[#68f12b] hover:bg-[#d97706] text-white transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
            >
              Buy $DIGIPEPE
            </button>
            <button
              onClick={() => window.open("https://x.com/DigitalPepeSol")}
              className="rounded-lg p-3 w-full lg:w-64 bg-black bg-opacity-70 border-2 border-[#68f12b] hover:bg-[#d97706] text-white transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
            >
              Twitter
            </button>
            <button
              onClick={() => window.open("https://t.me/digipepe")}
              className="rounded-lg p-3 w-full lg:w-64 bg-black bg-opacity-70 border-2 border-[#68f12b] hover:bg-[#d97706] text-white transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
            >
              Telegram
            </button>
            <button
              onClick={() => window.open("https://digital-pepe.com")}
              className="rounded-lg p-3 w-full lg:w-64 bg-black bg-opacity-70 border-2 border-[#68f12b] hover:bg-[#d97706] text-white transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
            >
              Website
            </button>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center">Games</h2>
        <GameGrid />
        <h2 className="text-2xl font-bold text-center">Recent Plays</h2>
        <RecentPlays />
      </div>
    </>
  );
}
