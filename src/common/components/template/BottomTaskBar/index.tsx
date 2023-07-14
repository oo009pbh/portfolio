import { BottomTaskBarWrapper } from './styles';
import Image from 'next/image';

export default function Home() {
  return (
    <BottomTaskBarWrapper>
      <div className="bottom-taskbar-icon">
        <Image alt="검색 아이콘" src="/icon/ic-search-file.svg" quality={100} width={18} height={18} />
      </div>
      <div className="bottom-taskbar-icon">
        <Image alt="파일 관리자 아이콘" src="/icon/ic-file-manager.svg" quality={100} width={24} height={20} />
      </div>
      <div className="bottom-taskbar-icon">
        <Image alt="설정 아이콘" src="/icon/ic-setting.svg" quality={100} width={22} height={22} />
      </div>
    </BottomTaskBarWrapper>
  );
}
