import {SVGProps} from "react";

export const IsoCertification = ({
  className,
  ...props
}: SVGProps<SVGSVGElement> & {className?: string}) => {
  return (
    <svg
      // width="87"
      // height="37"
      viewBox="0 0 87 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={className}
    >
      <g clipPath="url(#clip0_12674_12107)">
        <path
          d="M20.2879 36.686C13.9655 36.686 7.64466 36.686 1.32226 36.686C1.28422 36.686 1.24619 36.686 1.20816 36.686C0.846098 36.6875 0.843056 36.6875 0.843056 36.3328C0.841534 34.6634 0.840013 32.9939 0.840013 31.3245C0.840013 29.2683 0.840013 27.2105 0.841534 25.1543C0.841534 23.0277 0.841534 20.9012 0.841534 18.7746C0.841534 16.6282 0.83697 14.4833 0.838492 12.3369C0.838492 10.6996 0.850662 9.06223 0.849141 7.42336C0.850662 5.25859 0.847619 3.09382 0.835449 0.930578C0.835449 0.731835 0.890215 0.6875 1.07885 0.6875C6.62845 0.693615 12.178 0.692086 17.7276 0.693615C24.9735 0.693615 32.2193 0.693615 39.4651 0.693615C39.6456 0.693615 39.7359 0.787891 39.7359 0.976442C39.7359 9.25027 39.7359 17.5226 39.7359 25.7964C39.7359 29.3462 39.7343 32.8946 39.7404 36.4444C39.7404 36.6401 39.6902 36.6844 39.4985 36.6844C33.094 36.6783 26.691 36.6799 20.2864 36.6799V36.6844L20.2879 36.686ZM30.2675 12.5219C30.2234 12.5219 30.1792 12.5219 30.1351 12.5219C28.877 12.5097 27.6889 12.7527 26.6225 13.4667C25.3142 14.3427 24.4121 15.5137 24.0059 17.0486C23.799 17.8283 23.758 18.6187 23.8249 19.4244C23.9344 20.7453 24.4425 21.8796 25.3203 22.8611C26.3898 24.0566 27.7452 24.6773 29.3182 24.8455C29.9784 24.9158 30.6402 24.9158 31.3035 24.818C32.0671 24.7064 32.8141 24.5214 33.4743 24.13C35.4185 22.9758 36.5123 21.2666 36.6264 18.9856C36.707 17.3712 36.2369 15.9204 35.1857 14.676C34.4951 13.858 33.6919 13.2053 32.6528 12.8781C31.8755 12.632 31.0874 12.4775 30.2675 12.5219ZM20.5222 13.4606C20.0597 13.2939 19.6292 13.1135 19.185 12.9866C18.4898 12.7894 17.7733 12.7099 17.0522 12.6671C15.931 12.5999 14.8616 12.7695 13.8667 13.3199C12.6344 14.0033 12.0092 15.026 12.1446 16.4585C12.1704 16.7383 12.2359 17.0226 12.3363 17.2856C12.7029 18.2426 13.4513 18.8572 14.2926 19.3602C15.467 20.0634 16.7677 20.4303 18.0897 20.7315C18.4655 20.8171 18.8473 20.8737 19.2231 20.9593C19.5334 21.0296 19.7494 21.2849 19.7677 21.5677C19.792 21.9591 19.6673 22.167 19.3098 22.3046C18.9873 22.4285 18.648 22.4239 18.3164 22.3704C17.3975 22.2221 16.5593 21.8597 15.785 21.3522C15.4229 21.1152 15.1202 20.8095 14.8935 20.4303C14.8646 20.3814 14.7718 20.3447 14.7079 20.3447C13.9488 20.3401 13.1897 20.3447 12.4306 20.3401C12.2572 20.3386 12.2222 20.4059 12.2222 20.5664C12.2298 21.849 12.2313 23.1317 12.2267 24.4128C12.2267 24.5504 12.2632 24.5856 12.3956 24.5856C13.179 24.5841 13.9625 24.5902 14.7475 24.5917C14.7825 24.5917 14.819 24.5779 14.8616 24.5703V23.8426C14.9392 23.8747 14.9954 23.8961 15.0502 23.9206C15.2525 24.0092 15.4503 24.1132 15.6587 24.185C17.0598 24.6743 18.4974 24.8332 19.9715 24.662C20.9223 24.552 21.7636 24.1774 22.4999 23.5827C23.4735 22.7969 23.618 21.7145 23.4765 20.5633C23.3959 19.9105 23.0384 19.3785 22.6003 18.9092C21.7636 18.0102 20.6926 17.5027 19.544 17.1495C18.791 16.9172 18.0167 16.7536 17.2606 16.5319C16.8757 16.4188 16.5045 16.2567 16.1333 16.1008C15.9128 16.0091 15.8778 15.7966 15.8884 15.5871C15.9006 15.3563 15.9721 15.156 16.2125 15.052C16.5821 14.89 16.9594 14.8778 17.3443 14.9634C18.1308 15.1361 18.8549 15.4618 19.5273 15.9005C19.8878 16.1359 20.2393 16.3928 20.469 16.7704C20.5435 16.8927 20.6287 16.9309 20.7611 16.9294C21.5019 16.9248 22.2413 16.9217 22.9821 16.9294C23.1221 16.9294 23.1525 16.882 23.151 16.7536C23.1479 15.4969 23.1479 14.2402 23.1555 12.9836C23.1555 12.8383 23.1129 12.8017 22.973 12.8017C22.2139 12.8047 21.4548 12.8017 20.6956 12.7955C20.5648 12.7955 20.5131 12.8322 20.5207 12.9683C20.5313 13.1426 20.5237 13.3169 20.5237 13.4636L20.5222 13.4606ZM9.84442 15.5993C9.89614 15.5993 9.93873 15.5993 9.98133 15.5993C10.456 15.607 10.9291 15.6146 11.4037 15.6223C11.4935 15.6223 11.5711 15.6146 11.568 15.4954C11.5635 15.3624 11.565 15.2309 11.5635 15.0979C11.5574 14.3488 11.5467 13.5997 11.5482 12.8521C11.5482 12.7069 11.5041 12.6702 11.3642 12.6702C9.01684 12.6732 6.66952 12.6702 4.3222 12.6702C3.95253 12.6702 3.94949 12.6702 3.94797 13.0325C3.94797 13.8183 3.94797 14.6056 3.94797 15.3914C3.94797 15.5122 3.94645 15.6253 4.11683 15.6223C4.56561 15.6162 5.0159 15.6284 5.46316 15.6039C5.64875 15.5948 5.67765 15.6574 5.67461 15.8149C5.66396 16.5426 5.6594 17.2718 5.65636 17.9995C5.65331 18.7792 5.65636 19.5574 5.65636 20.3371C5.65636 20.7177 5.66244 21.0984 5.66701 21.4775C5.67005 21.716 5.65331 21.7283 5.40687 21.7252C4.98243 21.7191 4.55952 21.7222 4.13509 21.716C4.00426 21.7145 3.94797 21.7481 3.94949 21.8995C3.95558 22.7678 3.94949 23.6377 3.94341 24.5061C3.94341 24.6467 4.01186 24.6834 4.129 24.6834C4.31155 24.6834 4.49563 24.6758 4.67818 24.6773C6.92966 24.6819 9.18114 24.6865 11.4326 24.6865C11.4737 24.6865 11.5482 24.6284 11.5513 24.5917C11.5665 24.4419 11.5604 24.2905 11.5604 24.1392C11.5604 23.3916 11.5558 22.644 11.5574 21.8964C11.5574 21.7573 11.5087 21.7084 11.3657 21.7115C10.9549 21.7206 10.5427 21.716 10.1319 21.7176C9.83377 21.7176 9.83072 21.7176 9.83072 21.421C9.83072 19.536 9.83072 17.651 9.83072 15.7645C9.83072 15.7155 9.83681 15.6666 9.84137 15.6009L9.84442 15.5993ZM24.8654 25.9019C24.657 25.9019 24.4927 25.911 24.3315 25.8988C24.1641 25.8881 24.0409 25.9003 24.0105 26.1113C23.9922 26.2321 23.9146 26.3437 23.8705 26.4614C23.8097 26.6219 23.7275 26.7106 23.545 26.6051C23.4811 26.5684 23.4005 26.5623 23.3274 26.544C22.5029 26.3345 21.6632 26.2458 20.8158 26.2076C20.6956 26.2015 20.6333 26.1709 20.6713 26.0379C20.7002 25.937 20.65 25.8973 20.5526 25.8988C20.4005 25.8988 20.2484 25.8896 20.0978 25.9034C20.0476 25.908 19.9593 25.9798 19.9624 26.0089C19.9928 26.2306 19.8681 26.2443 19.7022 26.2413C18.8047 26.2229 17.9284 26.3727 17.0659 26.6036C16.9138 26.6433 16.8347 26.6158 16.7829 26.4568C16.5928 25.8744 16.5821 25.8713 15.9843 25.8973C15.9782 25.8973 15.9721 25.8973 15.966 25.8973C15.8382 25.8973 15.7911 25.9447 15.8474 26.0731C15.928 26.2596 15.998 26.4507 16.0801 26.6357C16.1425 26.7748 16.1455 26.8451 15.966 26.9109C15.4336 27.105 14.9057 27.3206 14.3885 27.5514C14.1101 27.6753 14.1085 27.7058 13.926 27.4582C13.5883 26.9995 13.2658 26.5287 12.9326 26.0655C12.89 26.0058 12.8337 25.9156 12.7789 25.911C12.5325 25.8942 12.283 25.9034 11.997 25.9034C12.4138 26.6984 12.9143 27.3756 13.4605 28.0345C13.0421 28.3158 12.6451 28.5818 12.2374 28.8555C12.213 28.8372 12.178 28.8127 12.1446 28.7852C11.174 27.9978 10.3434 27.0806 9.6284 26.0548C9.58732 25.9967 9.52495 25.9156 9.46714 25.911C9.21309 25.8958 8.95751 25.9049 8.68673 25.9049C10.6963 29.2453 15.4609 33.1942 22.2565 32.2601C25.01 31.881 27.4121 30.6916 29.4764 28.828C30.412 27.9826 31.2137 27.0194 31.9044 25.9003C31.6016 25.9003 31.3521 25.8942 31.1027 25.9049C31.054 25.9065 30.9977 25.9691 30.9657 26.0181C30.2812 27.0607 29.4338 27.952 28.4815 28.7485C28.3887 28.8265 28.3157 28.8295 28.2138 28.7592C27.9551 28.5773 27.6874 28.4091 27.4242 28.2333C27.3436 28.1798 27.2645 28.1232 27.1854 28.0697C27.7437 27.3802 28.2427 26.6877 28.6808 25.8958C28.3933 25.8958 28.1666 25.8866 27.9415 25.9019C27.873 25.9065 27.7908 25.9646 27.7467 26.0226C27.3573 26.5516 26.977 27.0882 26.586 27.6172C26.5571 27.6569 26.4491 27.6737 26.3974 27.6523C25.8208 27.4154 25.2473 27.1677 24.6722 26.9246C24.616 26.9017 24.5597 26.8803 24.5034 26.8574C24.6251 26.5363 24.7407 26.2321 24.867 25.8988L24.8654 25.9019ZM31.9059 11.4777C31.2046 10.3434 30.3861 9.3741 29.4323 8.5302C26.9724 6.3532 24.1185 5.11947 20.8189 4.99717C18.0714 4.89474 15.5157 5.55823 13.1775 7.00294C11.3444 8.13425 9.83529 9.61106 8.66847 11.4823C8.96056 11.4823 9.22526 11.4869 9.48844 11.4777C9.53255 11.4777 9.58732 11.4257 9.6147 11.3829C10.1046 10.6292 10.6902 9.95657 11.3292 9.32976C11.6167 9.04694 11.9286 8.7901 12.2146 8.53326C12.642 8.81915 13.033 9.08057 13.4377 9.35117C12.9052 10.0192 12.4108 10.7011 11.9803 11.4823C12.2708 11.4823 12.5173 11.4869 12.7622 11.4777C12.8048 11.4762 12.8581 11.4242 12.887 11.3814C13.0224 11.1827 13.1425 10.9732 13.2855 10.7791C13.5213 10.458 13.7678 10.1446 14.0157 9.83121C14.0796 9.74865 14.1511 9.69973 14.2759 9.75935C14.6851 9.95657 15.0989 10.1416 15.5157 10.3204C15.7226 10.4091 15.9386 10.4748 16.1577 10.5543C16.0892 10.7256 16.0299 10.8708 15.9721 11.0176C15.9158 11.1613 15.861 11.3065 15.8017 11.464C15.8747 11.4685 15.9249 11.4762 15.9751 11.4747C16.1699 11.4747 16.4133 11.5404 16.5456 11.4471C16.6871 11.3478 16.7373 11.1032 16.7981 10.9121C16.8423 10.7699 16.9092 10.7607 17.0324 10.7882C17.4082 10.8708 17.7854 10.9595 18.1658 11.0114C18.7515 11.0925 19.3417 11.1444 19.9457 11.2117C19.9487 11.2545 19.938 11.3157 19.9593 11.3631C19.9791 11.4074 20.0308 11.467 20.0719 11.4701C20.259 11.4808 20.4477 11.4747 20.6333 11.4747C20.688 11.175 20.688 11.1735 20.9695 11.1567C21.8594 11.1062 22.7448 11.0206 23.6058 10.7714C23.6682 10.7531 23.7382 10.7607 23.7975 10.7561C23.8295 10.8494 23.8599 10.9197 23.8766 10.9916C23.9649 11.3722 24.1702 11.5435 24.5855 11.4838C24.8639 11.4441 24.8791 11.467 24.762 11.1949C24.6677 10.9763 24.5764 10.7577 24.4775 10.5237C24.5673 10.4901 24.6312 10.4687 24.6951 10.4427C25.2138 10.2287 25.7371 10.0208 26.2513 9.79605C26.5358 9.67221 26.5388 9.65234 26.7229 9.90459C27.0591 10.3648 27.3831 10.8341 27.7148 11.2958C27.7619 11.36 27.8198 11.4594 27.8791 11.464C28.1255 11.4823 28.375 11.4716 28.661 11.4716C28.2518 10.6552 27.698 9.9902 27.1839 9.31142C27.4729 9.12185 27.7589 8.93992 28.0419 8.74882C28.3689 8.52868 28.3674 8.52562 28.6595 8.7794C29.5251 9.52851 30.304 10.3586 30.9429 11.3141C30.9855 11.3783 31.0585 11.4609 31.1224 11.4655C31.3643 11.4838 31.6092 11.4731 31.9074 11.4731L31.9059 11.4777Z"
          fill="white"
        />
        <path
          d="M69.1993 16.6909C69.4229 15.8287 69.7637 15.0444 70.2718 14.3366C70.8347 13.5523 71.5649 12.9867 72.4928 12.7038C73.7798 12.3109 75.0318 12.4302 76.2245 13.0402C77.1464 13.5111 77.7686 14.2724 78.1641 15.2248C78.514 16.0703 78.6829 16.9554 78.7498 17.8666C78.8381 19.0652 78.797 20.253 78.4669 21.4134C78.1763 22.4346 77.7017 23.3595 76.8589 24.049C76.3021 24.5046 75.6586 24.7691 74.9573 24.8944C74.1054 25.0473 73.2596 25.0198 72.4274 24.7706C71.2348 24.4144 70.4102 23.624 69.8367 22.5447C69.5568 22.0188 69.3332 21.4684 69.2069 20.86C69.1841 20.9104 69.1521 20.9578 69.14 21.0113C68.9772 21.7467 68.7201 22.4484 68.3063 23.0782C67.6795 24.0322 66.7957 24.633 65.6791 24.87C64.9747 25.0198 64.2582 25.0412 63.5493 24.9097C62.6472 24.7416 61.8455 24.3685 61.2065 23.6806C60.379 22.7923 59.9469 21.7222 59.7279 20.5466C59.5849 19.776 59.5362 18.9948 59.5833 18.2151C59.6381 17.2811 59.8252 16.373 60.1919 15.5015C60.5387 14.6775 61.0316 13.9712 61.7238 13.4086C62.3977 12.8598 63.1812 12.5861 64.0376 12.5082C64.9443 12.4271 65.8175 12.5693 66.6405 12.953C67.4453 13.3291 68.0523 13.9284 68.4736 14.7096C68.784 15.286 69.0289 15.8914 69.1384 16.5426C69.1476 16.5946 69.178 16.642 69.1993 16.6909ZM65.9255 18.7441C65.9149 18.5576 65.9073 18.2595 65.8784 17.9644C65.8145 17.3193 65.7095 16.6833 65.4022 16.1008C65.2531 15.818 65.0782 15.5566 64.7983 15.3823C64.5138 15.2065 64.2354 15.2034 63.9996 15.4327C63.817 15.6101 63.6451 15.8165 63.525 16.0412C63.1857 16.6772 63.0503 17.3697 63.0032 18.0867C62.9454 18.9734 62.9788 19.8494 63.242 20.704C63.4002 21.2177 63.6056 21.7084 64.0072 22.0845C64.3693 22.4254 64.675 22.4163 65.0371 22.0799C65.3003 21.8353 65.46 21.528 65.5741 21.1963C65.8358 20.4395 65.9103 19.6522 65.9255 18.7441ZM75.3437 18.8542C75.3604 18.8527 75.3772 18.8511 75.3939 18.8481C75.3148 18.2656 75.2433 17.6831 75.1566 17.1022C75.0851 16.6252 74.901 16.1895 74.6333 15.7905C74.5876 15.7217 74.5374 15.6559 74.4796 15.5979C74.0293 15.127 73.5349 15.1606 73.1592 15.6942C72.8458 16.1406 72.6526 16.6435 72.5476 17.1771C72.4031 17.914 72.3575 18.657 72.4305 19.4091C72.4989 20.1078 72.6282 20.7912 72.9599 21.4164C73.0801 21.6427 73.2246 21.8674 73.4026 22.0494C73.7783 22.4316 74.1815 22.4178 74.5253 22.0081C74.6972 21.8032 74.8432 21.5632 74.9451 21.3171C75.2676 20.5313 75.3376 19.6981 75.3407 18.8572L75.3437 18.8542Z"
          fill="white"
        />
        <path
          d="M44.9055 22.4723C44.9876 22.48 45.0394 22.4907 45.0926 22.4907C45.9658 22.4907 46.839 22.4907 47.7122 22.4892C47.9541 22.4892 47.9556 22.4861 47.9556 22.2461C47.9556 21.873 47.9556 21.5 47.9556 21.1148H50.8263C50.8263 21.2172 50.8263 21.3043 50.8263 21.3899C50.8293 22.4632 50.8308 23.5364 50.84 24.6096C50.84 24.7686 50.7776 24.8007 50.6376 24.8007C48.6448 24.7961 46.6504 24.7961 44.6575 24.7946C43.7022 24.7946 42.7468 24.7961 41.7914 24.7961C41.5404 24.7961 41.5359 24.7915 41.5359 24.5393C41.5359 23.8406 41.5298 23.1419 41.545 22.4448C41.548 22.3179 41.6165 22.1788 41.691 22.0703C42.0318 21.5749 42.3528 21.0613 42.7392 20.6057C43.4025 19.8245 44.1935 19.1808 45.0333 18.5953C45.5459 18.2376 46.0464 17.8584 46.5378 17.4701C46.7919 17.2683 47.0003 17.013 47.0794 16.6843C47.2315 16.0529 46.8056 15.4582 46.1636 15.3436C45.406 15.2075 44.7807 15.4521 44.2316 15.9505C43.9973 16.163 43.7843 16.3969 43.5303 16.6538C43.3812 16.4948 43.2458 16.348 43.1104 16.2012C42.686 15.7472 42.2646 15.2916 41.834 14.8437C41.7108 14.7152 41.7093 14.6327 41.8356 14.4982C42.4532 13.8454 43.1499 13.3026 43.9805 12.9602C44.5115 12.7416 45.0667 12.5933 45.6463 12.5444C46.4739 12.474 47.2756 12.578 48.0408 12.9021C48.8562 13.2476 49.4799 13.8102 49.8663 14.6205C50.3182 15.5637 50.3516 16.5467 50.0808 17.5328C49.8907 18.2223 49.4556 18.7803 48.8851 19.2068C48.2355 19.6915 47.5586 20.1379 46.9014 20.6118C46.2016 21.1163 45.5322 21.6575 44.9952 22.3454C44.9694 22.3775 44.9481 22.4127 44.904 22.4769L44.9055 22.4723Z"
          fill="white"
        />
        <path
          d="M56.2749 14.9928C56.0649 14.9928 55.9143 14.9928 55.7637 14.9928C55.0426 14.9928 54.3216 14.9989 53.5989 14.9944C53.462 14.9944 53.4027 15.0295 53.4118 15.1778C53.427 15.4377 53.4225 15.6976 53.4392 15.9575C53.4483 16.1027 53.3708 16.1089 53.2643 16.1089C52.6512 16.1089 52.0366 16.1089 51.4235 16.1089C51.2395 16.1089 51.0554 16.1012 50.8728 16.1119C50.7314 16.1196 50.6872 16.0722 50.6872 15.9285C50.6888 15.0326 50.6842 14.1382 50.6812 13.2424C50.6812 13.224 50.6812 13.2041 50.6812 13.1858C50.6842 12.7165 50.6842 12.7149 51.1604 12.7149C53.818 12.7149 56.4757 12.7195 59.1318 12.721C59.3722 12.721 59.6125 12.7256 59.8529 12.7119C59.9731 12.7042 60.0142 12.7425 60.0111 12.8571C59.9989 13.542 59.9913 14.2269 59.9746 14.9133C59.9716 15.0112 59.9335 15.1121 59.8909 15.2023C59.3296 16.3871 58.7621 17.5704 58.2008 18.7552C57.5421 20.1464 56.8879 21.5391 56.2308 22.9303C55.9934 23.4333 55.709 23.921 55.5249 24.4423C55.4047 24.7817 55.2161 24.7985 54.9331 24.797C53.8895 24.7878 52.8444 24.7939 51.8008 24.7939C51.7704 24.7939 51.74 24.7909 51.6578 24.7863C53.1973 21.5208 54.7262 18.2797 56.2764 14.9928H56.2749Z"
          fill="white"
        />
        <path
          d="M79.4468 22.4821C79.9595 22.4821 80.4508 22.4821 80.9437 22.4821C81.1917 22.4821 81.1871 22.4821 81.1871 22.2314C81.1871 20.244 81.1886 18.2565 81.1871 16.2706C81.1871 16.2171 81.1658 16.1636 81.1537 16.1086C81.0958 16.1223 81.035 16.1269 80.9817 16.1514C80.5178 16.3685 80.0583 16.5917 79.5913 16.8027C79.5457 16.8241 79.427 16.792 79.4118 16.7553C79.1669 16.1789 78.9326 15.5964 78.6968 15.017C78.6892 15.0002 78.6877 14.9803 78.6831 14.962C78.9372 14.832 79.1897 14.7052 79.4407 14.5752C80.2607 14.1487 80.9544 13.5662 81.5385 12.8507C81.6709 12.6871 81.8489 12.6994 82.0238 12.6994C82.643 12.6994 83.2637 12.7085 83.8828 12.7116C84.0912 12.7116 84.3012 12.7162 84.5081 12.6978C84.6936 12.681 84.7469 12.7468 84.7469 12.9302C84.7378 14.2068 84.7378 15.4818 84.7378 16.7583C84.7378 18.6112 84.7378 20.4656 84.7332 22.3185C84.7332 22.4592 84.7895 22.4882 84.9142 22.4867C85.325 22.4806 85.7372 22.4867 86.148 22.4791C86.2849 22.476 86.3381 22.5142 86.3366 22.661C86.329 23.3092 86.329 23.9559 86.3321 24.6041C86.3321 24.7264 86.3153 24.7768 86.1662 24.7768C83.9832 24.7768 81.8017 24.783 79.6187 24.7906C79.4803 24.7906 79.4422 24.7585 79.4453 24.6087C79.459 23.9498 79.4529 23.2893 79.4529 22.6304C79.4529 22.5937 79.4498 22.5555 79.4468 22.4806V22.4821Z"
          fill="white"
        />
        <path
          d="M28.3394 18.7304C28.3591 18.2244 28.3439 17.7137 28.4063 17.2123C28.5158 16.3256 29.1563 15.6407 29.9975 15.5C30.6243 15.3946 31.1278 15.6514 31.534 16.1299C31.9113 16.5717 32.0619 17.0915 32.068 17.6572C32.0771 18.3619 32.0893 19.0667 32.0619 19.77C32.0345 20.4931 31.7729 21.1229 31.1567 21.548C30.4311 22.0509 29.5305 21.9271 28.9524 21.259C28.563 20.8095 28.3226 20.3005 28.3546 19.6844C28.3713 19.3679 28.3576 19.0499 28.3576 18.7334H28.3394V18.7304Z"
          fill="white"
        />
        <path
          d="M23.4233 27.307C23.3259 27.4889 23.2529 27.6281 23.1799 27.7641C22.8193 28.4383 22.3751 29.0529 21.8868 29.6384C21.7909 29.7531 21.7058 29.7944 21.5491 29.7592C21.2676 29.6965 20.9771 29.6736 20.6759 29.6323C20.6759 28.8985 20.6759 28.1723 20.6759 27.4461C20.6759 27.3391 20.6743 27.2306 20.6606 27.1236C20.6439 26.989 20.6987 26.9325 20.8295 26.9477C21.4563 27.0196 22.083 27.0884 22.7083 27.1679C22.9304 27.1969 23.151 27.2535 23.4248 27.307H23.4233Z"
          fill="white"
        />
        <path
          d="M19.96 28.307C19.96 28.6999 19.9554 29.0928 19.9615 29.4872C19.963 29.6187 19.9296 29.6707 19.7851 29.6844C19.5417 29.7074 19.3013 29.7731 19.0579 29.8022C18.9864 29.8113 18.8814 29.7762 18.8373 29.7227C18.2775 29.0576 17.8013 28.333 17.3754 27.5762C17.2095 27.2812 17.2095 27.2659 17.5503 27.2185C18.2805 27.1176 19.0138 27.0335 19.7455 26.9418C19.9037 26.9219 19.9691 26.9678 19.9615 27.1467C19.9463 27.5334 19.957 27.9202 19.957 28.307C19.957 28.307 19.96 28.307 19.9615 28.307H19.96Z"
          fill="white"
        />
        <path
          d="M23.2913 31.2819C22.5565 31.7314 18.4369 31.791 17.4663 31.3614C18.1585 30.8707 18.8933 30.5267 19.7208 30.4136C21.1889 30.2118 22.5519 30.6994 23.2913 31.2819Z"
          fill="white"
        />
        <path
          d="M18.1886 30.1188C18.0182 30.1953 17.8783 30.2671 17.7307 30.3206C17.6744 30.3405 17.5923 30.3374 17.539 30.3099C16.538 29.7993 15.5994 29.1939 14.7855 28.4096C14.7536 28.3791 14.7201 28.35 14.6912 28.3164C14.676 28.298 14.6684 28.2736 14.644 28.2262C14.781 28.1666 14.9087 28.1054 15.0411 28.0519C15.4625 27.8822 15.8854 27.7171 16.3068 27.5489C16.4407 27.4954 16.5213 27.5229 16.5913 27.6621C17.0005 28.4662 17.504 29.2107 18.0623 29.9186C18.108 29.9767 18.1414 30.0454 18.1886 30.1204V30.1188Z"
          fill="white"
        />
        <path
          d="M22.5679 30.0337C23.114 29.2021 23.6541 28.378 24.2139 27.5234C24.6277 27.6885 25.0841 27.8689 25.5389 28.0509C25.6439 28.0937 25.7473 28.1426 25.8523 28.1839C26.0044 28.2435 25.971 28.3276 25.8797 28.4071C25.5617 28.6868 25.262 28.9957 24.9137 29.2311C24.3812 29.5904 23.8153 29.9007 23.2555 30.2187C23.1779 30.263 23.0471 30.2584 22.9573 30.2279C22.8158 30.182 22.6896 30.0949 22.5679 30.0322V30.0337Z"
          fill="white"
        />
        <path
          d="M12.837 29.299C13.2112 29.059 13.5322 28.848 13.8593 28.6493C13.8958 28.6264 13.9916 28.6523 14.0281 28.6875C14.8466 29.4672 15.7259 30.1643 16.7223 30.7025C16.7831 30.7346 16.844 30.7667 16.9064 30.7988C16.7649 31.0464 16.593 31.1213 16.3481 31.0449C15.2208 30.6933 14.162 30.198 13.1899 29.5222C13.0925 29.455 12.9906 29.3969 12.8354 29.299H12.837Z"
          fill="white"
        />
        <path
          d="M27.7614 29.3215C26.6524 30.0629 25.5419 30.624 24.3492 31.0169C24.2914 31.0352 24.2077 31.0276 24.156 30.997C24.0541 30.9374 23.9673 30.8518 23.8472 30.7555C24.8968 30.1653 25.8781 29.5187 26.6752 28.5938C27.0358 28.8353 27.3811 29.0677 27.7614 29.323V29.3215Z"
          fill="white"
        />
        <path
          d="M17.1788 10.1081C17.4024 9.74422 17.591 9.414 17.801 9.1006C18.1143 8.63279 18.4475 8.17873 18.767 7.71551C18.8567 7.58709 18.9541 7.53511 19.1199 7.57639C19.3511 7.63601 19.59 7.66659 19.8258 7.70175C19.9277 7.71704 19.9612 7.75679 19.9612 7.86227C19.9566 8.6603 19.9536 9.45986 19.9597 10.2579C19.9597 10.4062 19.9079 10.4505 19.7725 10.4368C19.2081 10.3771 18.6422 10.3252 18.0794 10.2579C17.7934 10.2243 17.5119 10.1646 17.1772 10.1081H17.1788Z"
          fill="white"
        />
        <path
          d="M23.4119 10.0875C22.5143 10.2847 21.6183 10.4452 20.6675 10.4483C20.6675 9.8964 20.6675 9.37355 20.6675 8.85071C20.6675 8.57858 20.6751 8.30799 20.672 8.03586C20.669 7.77291 20.6842 7.75456 20.9337 7.72552C21.1649 7.698 21.3962 7.65672 21.6274 7.63379C21.6913 7.62767 21.7826 7.65061 21.8221 7.69341C22.455 8.38443 22.9281 9.18704 23.3921 9.99424C23.4012 10.0095 23.3997 10.0294 23.4119 10.086V10.0875Z"
          fill="white"
        />
        <path
          d="M17.4858 6.01793C19.43 5.59904 21.3514 5.59598 23.3245 6.08825C22.5076 6.6906 21.6222 6.96884 20.6623 7.01929C19.3464 7.08808 17.965 6.5102 17.4858 6.01946V6.01793Z"
          fill="white"
        />
        <path
          d="M18.178 7.28826C17.9026 7.67505 17.6258 8.03584 17.3793 8.41651C17.107 8.8354 16.8591 9.26805 16.608 9.7007C16.5442 9.8123 16.4863 9.89332 16.3449 9.83982C15.8261 9.6426 15.3074 9.44692 14.7901 9.24817C14.7399 9.2283 14.6973 9.19008 14.6167 9.13963C14.8936 8.89197 15.1446 8.65653 15.4093 8.43639C15.995 7.95023 16.6385 7.5558 17.3093 7.19653C17.641 7.01767 17.889 7.11551 18.178 7.29132V7.28826Z"
          fill="white"
        />
        <path
          d="M26.0171 9.15478C25.4253 9.38715 24.8625 9.60577 24.3011 9.82897C24.1901 9.87331 24.1262 9.83509 24.0729 9.73419C23.6546 8.94992 23.1906 8.19469 22.6003 7.52508C22.4954 7.40584 22.5288 7.33857 22.6657 7.29271C22.7023 7.28048 22.7418 7.27436 22.7707 7.25143C23.0217 7.06186 23.2484 7.14594 23.4994 7.27742C24.3665 7.73606 25.1591 8.2956 25.8635 8.98049C25.9076 9.0233 25.9441 9.07222 26.0171 9.15478Z"
          fill="white"
        />
        <path
          d="M16.9261 6.55249C16.5123 6.81238 16.0879 7.03864 15.7091 7.32605C15.1462 7.75412 14.6183 8.22651 14.0707 8.67445C14.022 8.7142 13.9216 8.757 13.882 8.73407C13.5489 8.54144 13.2249 8.33353 12.8993 8.1302C12.8856 8.12103 12.881 8.0981 12.8628 8.06293C13.1838 7.85502 13.4987 7.63793 13.8273 7.44224C14.6564 6.9515 15.5418 6.58612 16.4606 6.30024C16.5093 6.28495 16.5808 6.28342 16.6188 6.30788C16.7268 6.37973 16.8242 6.4684 16.9261 6.55096V6.55249Z"
          fill="white"
        />
        <path
          d="M27.7968 8.0783C27.4986 8.26634 27.2567 8.42381 27.0118 8.57516C26.6832 8.77849 26.6817 8.77696 26.4078 8.51248C25.74 7.8658 25.0052 7.30932 24.2081 6.83387C24.1077 6.77424 23.9951 6.73297 23.8901 6.68404C24.0042 6.40733 24.1822 6.29573 24.4195 6.3951C25.1239 6.69169 25.8267 6.9898 26.5128 7.32461C26.9372 7.531 27.3297 7.80159 27.7952 8.0783H27.7968Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_12674_12107">
          <rect
            width="85.5"
            height="36"
            fill="white"
            transform="translate(0.835449 0.6875)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
