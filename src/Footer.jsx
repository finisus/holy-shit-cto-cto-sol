import { useRef } from "react";

function Footer() {
  const contractRef = useRef(null);

  const copyContract = async() => {
    const address = contractRef.current;
    const textToCopy = address.innerText;

    try {
      // Try the modern Clipboard API first (if supported)
      navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
      alert("Contract copied successfully!");
    } catch (err) {
      // If Clipboard API fails, use the legacy approach
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed"; // Hide element off-screen
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Text copied successfully using legacy approach");
      alert("Contract copied successfully!");
    }
  }

  const openTwitter = () => {
    window.open('https://x.com/', '_blank');
  }

  const openTelegram = () => {
    window.open('https://t.me/holyshitrealcto', '_blank');
  }

  const openChart = () => {
    window.open('https://dexscreener.com/solana/3b8qgdqesxcser4hepdsb3ggwalgsqykjkpzhxqz8hct', '_blank');
  }

  const openBuy = () => {
    window.open('https://pump.fun/7KXJouu7ET4CLiBEd83RpuUGPhWgsHNsSRr5WFCgpump', '_blank');
  }

  return (
    <div className="footer">
      <div className="socials">
        <button onClick={openTwitter}>Twitter</button>
        <button onClick={openTelegram}>Telegram</button>
        <button onClick={openChart}>Chart</button>
        <button onClick={openBuy}>Buy</button>
      </div>
      <div className="contract">
        <span className="contract">
          CA: <span ref={contractRef}>EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v</span>
        </span>
        <button onClick={copyContract}>Copy Contract</button>
      </div> 
    </div>
   );
}

export default Footer;