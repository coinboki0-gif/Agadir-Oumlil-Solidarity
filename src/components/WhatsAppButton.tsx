"use client";
export default function WhatsAppButton() {
  const phoneNumber = "212673028454";
  const message = encodeURIComponent("Hello, I would like to inquire about the association activities");
  const whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + message;
  return (
    <a
      href={whatsappUrl}
      target={"_blank"}
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        width: "60px",
        height: "60px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.45)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        textDecoration: "none",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.12)";
        e.currentTarget.style.boxShadow = "0 6px 28px rgba(37, 211, 102, 0.65)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(37, 211, 102, 0.45)";
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white">
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.5 2.04 7.83L.5 31.5l7.88-2.06A15.45 15.45 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.3a13.2 13.2 0 01-6.72-1.83l-.48-.29-4.68 1.22 1.25-4.56-.32-.5A13.25 13.25 0 1116 28.8zm7.27-9.93c-.4-.2-2.35-1.16-2.71-1.29-.36-.13-.63-.2-.89.2-.26.4-1.02 1.3-1.25 1.56-.23.27-.46.3-.86.1-.4-.2-1.69-.62-3.22-1.98-1.19-1.06-1.99-2.37-2.22-2.77-.23-.4-.02-.61.17-.81.18-.18.4-.46.6-.69.2-.23.27-.4.4-.67.13-.26.07-.5-.03-.69-.1-.2-.89-2.14-1.22-2.93-.32-.77-.65-.67-.89-.68l-.76-.01c-.26 0-.69.1-1.05.5-.36.4-1.38 1.35-1.38 3.3s1.41 3.83 1.61 4.09c.2.27 2.78 4.24 6.73 5.95.94.4 1.67.65 2.24.83.94.3 1.8.26 2.47.16.75-.11 2.35-.96 2.68-1.89.33-.92.33-1.71.23-1.88-.1-.17-.36-.27-.76-.47z"/>
      </svg>
    </a>
  );
}