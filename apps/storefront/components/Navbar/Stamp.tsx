interface StampProps {
  width?: number;
  height?: number;
}

const Stamp = ({ width = 157, height = 16 }: StampProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 157 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.77734 8.57422H2.1543L2.13477 6.78711H5.29883C5.83268 6.78711 6.28516 6.70898 6.65625 6.55273C7.03385 6.38997 7.32031 6.15885 7.51562 5.85938C7.71094 5.55339 7.80859 5.18555 7.80859 4.75586C7.80859 4.2806 7.71745 3.89323 7.53516 3.59375C7.35286 3.29427 7.07292 3.07617 6.69531 2.93945C6.32422 2.80273 5.84896 2.73438 5.26953 2.73438H2.89648V15H0.445312V0.78125H5.26953C6.05078 0.78125 6.7474 0.85612 7.35938 1.00586C7.97786 1.1556 8.50195 1.38997 8.93164 1.70898C9.36784 2.02148 9.69661 2.41862 9.91797 2.90039C10.1458 3.38216 10.2598 3.95508 10.2598 4.61914C10.2598 5.20508 10.1198 5.74219 9.83984 6.23047C9.5599 6.71224 9.14648 7.10612 8.59961 7.41211C8.05273 7.7181 7.3724 7.90039 6.55859 7.95898L5.77734 8.57422ZM5.66992 15H1.38281L2.48633 13.0566H5.66992C6.22331 13.0566 6.68555 12.9655 7.05664 12.7832C7.42773 12.5944 7.70443 12.3372 7.88672 12.0117C8.07552 11.6797 8.16992 11.2923 8.16992 10.8496C8.16992 10.3874 8.08854 9.98698 7.92578 9.64844C7.76302 9.30339 7.50586 9.03971 7.1543 8.85742C6.80273 8.66862 6.34375 8.57422 5.77734 8.57422H3.02344L3.04297 6.78711H6.62695L7.18359 7.46094C7.96484 7.48698 8.60612 7.65951 9.10742 7.97852C9.61523 8.29753 9.99284 8.71094 10.2402 9.21875C10.4876 9.72656 10.6113 10.2734 10.6113 10.8594C10.6113 11.7643 10.4128 12.5228 10.0156 13.1348C9.625 13.7467 9.06185 14.2122 8.32617 14.5312C7.59049 14.8438 6.70508 15 5.66992 15ZM15.8992 0.78125V15H13.448V0.78125H15.8992ZM24.4781 8.57422H20.8551L20.8355 6.78711H23.9996C24.5335 6.78711 24.9859 6.70898 25.357 6.55273C25.7346 6.38997 26.0211 6.15885 26.2164 5.85938C26.4117 5.55339 26.5094 5.18555 26.5094 4.75586C26.5094 4.2806 26.4182 3.89323 26.2359 3.59375C26.0536 3.29427 25.7737 3.07617 25.3961 2.93945C25.025 2.80273 24.5497 2.73438 23.9703 2.73438H21.5973V15H19.1461V0.78125H23.9703C24.7516 0.78125 25.4482 0.85612 26.0602 1.00586C26.6786 1.1556 27.2027 1.38997 27.6324 1.70898C28.0686 2.02148 28.3974 2.41862 28.6187 2.90039C28.8466 3.38216 28.9605 3.95508 28.9605 4.61914C28.9605 5.20508 28.8206 5.74219 28.5406 6.23047C28.2607 6.71224 27.8473 7.10612 27.3004 7.41211C26.7535 7.7181 26.0732 7.90039 25.2594 7.95898L24.4781 8.57422ZM24.3707 15H20.0836L21.1871 13.0566H24.3707C24.9241 13.0566 25.3863 12.9655 25.7574 12.7832C26.1285 12.5944 26.4052 12.3372 26.5875 12.0117C26.7763 11.6797 26.8707 11.2923 26.8707 10.8496C26.8707 10.3874 26.7893 9.98698 26.6266 9.64844C26.4638 9.30339 26.2066 9.03971 25.8551 8.85742C25.5035 8.66862 25.0445 8.57422 24.4781 8.57422H21.7242L21.7437 6.78711H25.3277L25.8844 7.46094C26.6656 7.48698 27.3069 7.65951 27.8082 7.97852C28.316 8.29753 28.6936 8.71094 28.941 9.21875C29.1884 9.72656 29.3121 10.2734 29.3121 10.8594C29.3121 11.7643 29.1135 12.5228 28.7164 13.1348C28.3258 13.7467 27.7626 14.2122 27.027 14.5312C26.2913 14.8438 25.4059 15 24.3707 15ZM43.3207 7.5V8.28125C43.3207 9.35547 43.1807 10.319 42.9008 11.1719C42.6208 12.0247 42.2204 12.7507 41.6996 13.3496C41.1853 13.9486 40.5668 14.4076 39.8441 14.7266C39.1215 15.0391 38.3207 15.1953 37.4418 15.1953C36.5694 15.1953 35.7719 15.0391 35.0492 14.7266C34.3331 14.4076 33.7113 13.9486 33.184 13.3496C32.6566 12.7507 32.2465 12.0247 31.9535 11.1719C31.6671 10.319 31.5238 9.35547 31.5238 8.28125V7.5C31.5238 6.42578 31.6671 5.46549 31.9535 4.61914C32.24 3.76628 32.6436 3.04036 33.1645 2.44141C33.6918 1.83594 34.3135 1.37695 35.0297 1.06445C35.7523 0.745443 36.5499 0.585938 37.4223 0.585938C38.3012 0.585938 39.102 0.745443 39.8246 1.06445C40.5473 1.37695 41.169 1.83594 41.6898 2.44141C42.2107 3.04036 42.6111 3.76628 42.891 4.61914C43.1775 5.46549 43.3207 6.42578 43.3207 7.5ZM40.8695 8.28125V7.48047C40.8695 6.6862 40.7914 5.98633 40.6352 5.38086C40.4854 4.76888 40.2608 4.25781 39.9613 3.84766C39.6684 3.43099 39.307 3.11849 38.8773 2.91016C38.4477 2.69531 37.9626 2.58789 37.4223 2.58789C36.8819 2.58789 36.4001 2.69531 35.977 2.91016C35.5538 3.11849 35.1924 3.43099 34.893 3.84766C34.6 4.25781 34.3754 4.76888 34.2191 5.38086C34.0629 5.98633 33.9848 6.6862 33.9848 7.48047V8.28125C33.9848 9.07552 34.0629 9.77865 34.2191 10.3906C34.3754 11.0026 34.6033 11.5202 34.9027 11.9434C35.2087 12.36 35.5733 12.6758 35.9965 12.8906C36.4197 13.099 36.9014 13.2031 37.4418 13.2031C37.9887 13.2031 38.4737 13.099 38.8969 12.8906C39.3201 12.6758 39.6781 12.36 39.9711 11.9434C40.2641 11.5202 40.4854 11.0026 40.6352 10.3906C40.7914 9.77865 40.8695 9.07552 40.8695 8.28125ZM51.3332 0.78125V15H48.9016V0.78125H51.3332ZM55.7961 0.78125V2.73438H44.4777V0.78125H55.7961ZM63.877 0.78125V15H61.4453V0.78125H63.877ZM68.3398 0.78125V2.73438H57.0215V0.78125H68.3398ZM75.0145 2.67578L70.7664 15H68.198L73.5496 0.78125H75.1902L75.0145 2.67578ZM78.5691 15L74.3113 2.67578L74.1258 0.78125H75.7762L81.1473 15H78.5691ZM78.3641 9.72656V11.6699H70.6297V9.72656H78.3641ZM95.6 11.3379C95.6 11.0449 95.5544 10.7845 95.4633 10.5566C95.3786 10.3288 95.2256 10.1204 95.0043 9.93164C94.7829 9.74284 94.4704 9.56055 94.0668 9.38477C93.6697 9.20247 93.1618 9.01693 92.5434 8.82812C91.8663 8.61979 91.2413 8.38867 90.6684 8.13477C90.102 7.87435 89.6072 7.57487 89.184 7.23633C88.7608 6.89128 88.432 6.4974 88.1977 6.05469C87.9633 5.60547 87.8461 5.08789 87.8461 4.50195C87.8461 3.92253 87.9665 3.39518 88.2074 2.91992C88.4548 2.44466 88.8031 2.03451 89.2523 1.68945C89.7081 1.33789 90.2452 1.06771 90.8637 0.878906C91.4822 0.683594 92.1658 0.585938 92.9145 0.585938C93.9691 0.585938 94.8773 0.78125 95.6391 1.17188C96.4073 1.5625 96.9965 2.08659 97.4066 2.74414C97.8233 3.40169 98.0316 4.1276 98.0316 4.92188H95.6C95.6 4.45312 95.4991 4.03971 95.2973 3.68164C95.102 3.31706 94.8025 3.0306 94.3988 2.82227C94.0017 2.61393 93.4971 2.50977 92.8852 2.50977C92.3057 2.50977 91.824 2.59766 91.4398 2.77344C91.0557 2.94922 90.7693 3.18685 90.5805 3.48633C90.3917 3.78581 90.2973 4.12435 90.2973 4.50195C90.2973 4.76888 90.3591 5.01302 90.4828 5.23438C90.6065 5.44922 90.7953 5.65104 91.0492 5.83984C91.3031 6.02214 91.6221 6.19466 92.0062 6.35742C92.3904 6.52018 92.8428 6.67643 93.3637 6.82617C94.1514 7.06055 94.8383 7.32096 95.4242 7.60742C96.0102 7.88737 96.4984 8.20638 96.8891 8.56445C97.2797 8.92253 97.5727 9.32943 97.768 9.78516C97.9633 10.2344 98.0609 10.7454 98.0609 11.3184C98.0609 11.9173 97.9405 12.4577 97.6996 12.9395C97.4587 13.4147 97.1137 13.8216 96.6645 14.1602C96.2217 14.4922 95.6879 14.7493 95.0629 14.9316C94.4444 15.1074 93.7543 15.1953 92.9926 15.1953C92.309 15.1953 91.6352 15.1042 90.9711 14.9219C90.3135 14.7396 89.7146 14.4629 89.1742 14.0918C88.6339 13.7142 88.2042 13.2454 87.8852 12.6855C87.5661 12.1191 87.4066 11.4583 87.4066 10.7031H89.8578C89.8578 11.1654 89.9359 11.5592 90.0922 11.8848C90.2549 12.2103 90.4796 12.4772 90.766 12.6855C91.0525 12.8874 91.3845 13.0371 91.7621 13.1348C92.1462 13.2324 92.5564 13.2812 92.9926 13.2812C93.5655 13.2812 94.044 13.1999 94.4281 13.0371C94.8187 12.8743 95.1117 12.6465 95.307 12.3535C95.5023 12.0605 95.6 11.722 95.6 11.3379ZM106.279 0.78125V15H103.847V0.78125H106.279ZM110.741 0.78125V2.73438H99.423V0.78125H110.741ZM120.795 0.78125H123.236V10.2832C123.236 11.3639 123.002 12.2689 122.533 12.998C122.064 13.7272 121.426 14.2773 120.619 14.6484C119.818 15.013 118.923 15.1953 117.934 15.1953C116.911 15.1953 116 15.013 115.199 14.6484C114.398 14.2773 113.767 13.7272 113.305 12.998C112.849 12.2689 112.621 11.3639 112.621 10.2832V0.78125H115.062V10.2832C115.062 10.9668 115.18 11.5299 115.414 11.9727C115.648 12.4089 115.98 12.7311 116.41 12.9395C116.84 13.1478 117.348 13.252 117.934 13.252C118.52 13.252 119.024 13.1478 119.447 12.9395C119.877 12.7311 120.209 12.4089 120.443 11.9727C120.678 11.5299 120.795 10.9668 120.795 10.2832V0.78125ZM130.233 15H127.196L127.216 13.0566H130.233C131.112 13.0566 131.848 12.8646 132.44 12.4805C133.039 12.0964 133.488 11.5462 133.788 10.8301C134.094 10.1139 134.247 9.26107 134.247 8.27148V7.5C134.247 6.73177 134.159 6.05143 133.983 5.45898C133.814 4.86654 133.56 4.36849 133.221 3.96484C132.889 3.5612 132.479 3.25521 131.991 3.04688C131.509 2.83854 130.953 2.73438 130.321 2.73438H127.137V0.78125H130.321C131.265 0.78125 132.128 0.940755 132.909 1.25977C133.69 1.57227 134.364 2.02474 134.93 2.61719C135.503 3.20964 135.943 3.91927 136.249 4.74609C136.555 5.57292 136.708 6.4974 136.708 7.51953V8.27148C136.708 9.29362 136.555 10.2181 136.249 11.0449C135.943 11.8717 135.503 12.5814 134.93 13.1738C134.358 13.7598 133.674 14.2122 132.88 14.5312C132.092 14.8438 131.21 15 130.233 15ZM128.554 0.78125V15H126.102V0.78125H128.554ZM141.986 0.78125V15H139.535V0.78125H141.986ZM156.571 7.5V8.28125C156.571 9.35547 156.431 10.319 156.151 11.1719C155.871 12.0247 155.47 12.7507 154.95 13.3496C154.435 13.9486 153.817 14.4076 153.094 14.7266C152.371 15.0391 151.571 15.1953 150.692 15.1953C149.819 15.1953 149.022 15.0391 148.299 14.7266C147.583 14.4076 146.961 13.9486 146.434 13.3496C145.907 12.7507 145.496 12.0247 145.204 11.1719C144.917 10.319 144.774 9.35547 144.774 8.28125V7.5C144.774 6.42578 144.917 5.46549 145.204 4.61914C145.49 3.76628 145.894 3.04036 146.414 2.44141C146.942 1.83594 147.564 1.37695 148.28 1.06445C149.002 0.745443 149.8 0.585938 150.672 0.585938C151.551 0.585938 152.352 0.745443 153.075 1.06445C153.797 1.37695 154.419 1.83594 154.94 2.44141C155.461 3.04036 155.861 3.76628 156.141 4.61914C156.427 5.46549 156.571 6.42578 156.571 7.5ZM154.12 8.28125V7.48047C154.12 6.6862 154.041 5.98633 153.885 5.38086C153.735 4.76888 153.511 4.25781 153.211 3.84766C152.918 3.43099 152.557 3.11849 152.127 2.91016C151.698 2.69531 151.213 2.58789 150.672 2.58789C150.132 2.58789 149.65 2.69531 149.227 2.91016C148.804 3.11849 148.442 3.43099 148.143 3.84766C147.85 4.25781 147.625 4.76888 147.469 5.38086C147.313 5.98633 147.235 6.6862 147.235 7.48047V8.28125C147.235 9.07552 147.313 9.77865 147.469 10.3906C147.625 11.0026 147.853 11.5202 148.153 11.9434C148.459 12.36 148.823 12.6758 149.246 12.8906C149.67 13.099 150.151 13.2031 150.692 13.2031C151.239 13.2031 151.724 13.099 152.147 12.8906C152.57 12.6758 152.928 12.36 153.221 11.9434C153.514 11.5202 153.735 11.0026 153.885 10.3906C154.041 9.77865 154.12 9.07552 154.12 8.28125Z"
      fill="#484848"
    />
  </svg>
);

export default Stamp;
