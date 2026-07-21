export type SkillGroup = {
  title: string
  items: string[]
}

export type ExperienceItem = {
  company: string
  role: string
  period: string
  bullets: string[]
}

export type ProjectItem = {
  name: string
  tech: string
  description: string
}

export type ProjectGroup = {
  title: string
  items: ProjectItem[]
}

export type NavItem = {
  id: string
  label: string
}

export const profile = {
  name: 'Nguyễn Hữu Thọ',
  role: 'Frontend & Mobile Developer',
  tagline:
    'Gần 8 năm xây sản phẩm đa nền tảng — từ app Gen Z đến nền tảng Web3 — với React Native, Flutter và Next.js.',
  about:
    'Lập trình viên Frontend & Mobile với gần 8 năm kinh nghiệm xây dựng và tối ưu ứng dụng đa nền tảng. Thế mạnh đặc biệt ở các sản phẩm zero-to-one: từ ứng dụng hướng tới Gen Z đến nền tảng Blockchain/Web3 phức tạp. Mong muốn áp dụng chuyên môn sâu về React Native, Flutter và Next.js để giải quyết bài toán kỹ thuật khó, mang trải nghiệm mượt mà cho người dùng.',
  education: {
    school: 'Trường Đại học Kinh doanh và Công nghệ Hà Nội',
    degree: 'Cử nhân Công nghệ Thông tin',
    year: '2017',
  },
  avatar: `${import.meta.env.BASE_URL}avatar.svg`,
  nav: [
    { id: 'about', label: 'Giới thiệu' },
    { id: 'skills', label: 'Kỹ năng' },
    { id: 'experience', label: 'Kinh nghiệm' },
    { id: 'projects', label: 'Dự án' },
    { id: 'contact', label: 'Liên hệ' },
  ] satisfies NavItem[],
  skills: [
    {
      title: 'Frontend & Mobile',
      items: ['React Native', 'ReactJS', 'NextJS', 'Flutter'],
    },
    {
      title: 'Backend',
      items: ['NodeJS', 'NestJS'],
    },
    {
      title: 'DevOps & Infrastructure',
      items: ['Docker', 'CI/CD (GitHub Actions)'],
    },
    {
      title: 'AI & Tối ưu quy trình',
      items: ['Cursor', 'ChatGPT', 'Gemini', 'Grok', 'Claude Code'],
    },
    {
      title: 'Services & Integrations',
      items: [
        'Stripe',
        'IAP',
        'Firebase Analytics',
        'Crashlytics',
        'Remote Config',
        'Push Notifications',
      ],
    },
    {
      title: 'Domain',
      items: [
        'Blockchain (Wallet, Launchpad, Token Tracking)',
        'Fintech (Quản lý thu chi)',
        'Tiện ích & Đời sống',
      ],
    },
  ] satisfies SkillGroup[],
  experience: [
    {
      company: 'Công ty Cổ phần Becen',
      role: 'Fullstack Developer',
      period: '12/2023 – 04/2026',
      bullets: [
        'Thiết lập kiến trúc và triển khai nhiều dự án từ ý tưởng đến phát hành.',
        'Tham gia code review, tư vấn giải pháp và định hướng chất lượng kiến trúc.',
        'Kiểm thử, phân tích bottleneck và tối ưu hiệu suất frontend lẫn backend.',
      ],
    },
    {
      company: 'Công ty CP Đầu tư và Thương mại LaunchZone',
      role: 'Mobile Developer',
      period: '05/2018 – 12/2023',
      bullets: [
        'Kỹ sư Mobile nòng cốt — end-to-end từ phân tích yêu cầu đến phát hành App Store / Google Play.',
        'Chủ động chuyển đổi kiến trúc từ Ionic sang React Native, bứt phá hiệu năng UX.',
        'Phối hợp Designer đánh giá khả thi UI/UX và định hình tính năng cốt lõi.',
      ],
    },
    {
      company: 'Công ty TNHH MTV 3I',
      role: 'Thực tập sinh',
      period: '02/2017 – 04/2018',
      bullets: [
        'Làm quen quy trình Agile/Scrum trong môi trường doanh nghiệp.',
        'Hỗ trợ lập trình cơ bản, fix bug dưới sự hướng dẫn của kỹ sư cấp cao.',
      ],
    },
  ] satisfies ExperienceItem[],
  projects: [
    {
      title: 'Dự án công ty',
      items: [
        {
          name: 'LZ Wallet',
          tech: 'React Native',
          description:
            'Ví tiền điện tử phi tập trung đa nền tảng, bảo mật cao, tối ưu trải nghiệm giao dịch trong hệ sinh thái LaunchZone.',
        },
        {
          name: 'Sui Tracker',
          tech: 'NextJS',
          description:
            'Nền tảng web thống kê và theo dõi dữ liệu token theo thời gian thực trên mạng SUI.',
        },
        {
          name: 'Ton Sale',
          tech: 'NextJS',
          description:
            'Launchpad gọi vốn và phát hành token trên hệ sinh thái TON, tích hợp logic Web3 phức tạp.',
        },
        {
          name: 'Chipa',
          tech: 'Flutter',
          description:
            'Ứng dụng sổ thu chi với UI/UX hiện đại, tối ưu luồng thao tác cho người dùng Gen Z.',
        },
      ],
    },
    {
      title: 'Dự án cá nhân',
      items: [
        {
          name: 'Cook Note',
          tech: 'Flutter, Firebase',
          description:
            'Sổ tay công thức nấu ăn cho người dùng trẻ — giao diện trực quan, tìm kiếm và lưu trữ dễ dàng; tích hợp AI tìm món từ ảnh.',
        },
        {
          name: 'Hydration Tracker & Smart Alarm',
          tech: 'Flutter, Local Storage, Local Notification',
          description:
            'Bộ đôi tiện ích: theo dõi uống nước và báo thức thông minh yêu cầu thử thách thực tế (ví dụ chụp ảnh) để tắt chuông.',
        },
      ],
    },
  ] satisfies ProjectGroup[],
  contact: {
    email: 'huu.tho.ns@gmail.com',
    phone: '09839384581',
    address: 'An Khánh, Hà Nội',
    github: 'https://github.com/EnettyTech',
    birthday: '24/03/1995',
  },
} as const
