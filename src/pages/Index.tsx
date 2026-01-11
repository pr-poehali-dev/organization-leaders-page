import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Leader {
  name: string;
  organization: string;
  appointmentDate: string;
  phone: string;
  avatar: string;
  icon: string;
}

const leaders: Leader[] = [
  {
    name: "Anthony_Lernandez",
    organization: "Правительство",
    appointmentDate: "15.01.2024",
    phone: "1-234-567",
    avatar: "https://exbot.s3.cloud.ru/skins/small/1.png",
    icon: "Building2"
  },
  {
    name: "Anthony_Lernandez",
    organization: "Мин. Обороны",
    appointmentDate: "22.02.2024",
    phone: "2-345-678",
    avatar: "https://exbot.s3.cloud.ru/skins/small/1.png",
    icon: "Shield"
  },
  {
    name: "Anthony_Lernandez",
    organization: "Мин. Здрав.",
    appointmentDate: "10.03.2024",
    phone: "3-456-789",
    avatar: "https://exbot.s3.cloud.ru/skins/small/1.png",
    icon: "Heart"
  },
  {
    name: "Anthony_Lernandez",
    organization: "ТРК ритм",
    appointmentDate: "05.04.2024",
    phone: "4-567-890",
    avatar: "https://exbot.s3.cloud.ru/skins/small/1.png",
    icon: "Radio"
  },
  {
    name: "Anthony_Lernandez",
    organization: "МВД",
    appointmentDate: "18.05.2024",
    phone: "5-678-901",
    avatar: "https://exbot.s3.cloud.ru/skins/small/1.png",
    icon: "ShieldCheck"
  },
  {
    name: "Anthony_Lernandez",
    organization: "ФСБ",
    appointmentDate: "30.06.2024",
    phone: "6-789-012",
    avatar: "https://exbot.s3.cloud.ru/skins/small/1.png",
    icon: "Eye"
  },
  {
    name: "Anthony_Lernandez",
    organization: "ФСИН",
    appointmentDate: "12.07.2024",
    phone: "7-890-123",
    avatar: "https://exbot.s3.cloud.ru/skins/small/1.png",
    icon: "Lock"
  },
  {
    name: "Anthony_Lernandez",
    organization: "МЧС",
    appointmentDate: "25.08.2024",
    phone: "8-901-234",
    avatar: "https://exbot.s3.cloud.ru/skins/small/1.png",
    icon: "Flame"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0d0d15] py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5"></div>
      
      <div className="absolute top-40 left-1/3 w-[400px] h-[400px] bg-[#9b87f5]/6 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-40 right-1/3 w-[400px] h-[400px] bg-[#0EA5E9]/6 rounded-full blur-[120px]"></div>
      
      <div className="w-[900px] mx-auto relative z-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Лидеры организаций
          </h1>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#9b87f5]/40 to-transparent mx-auto mt-3"></div>
        </header>

        <div className="flex flex-col gap-3">
          {leaders.map((leader, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-[#1a1a2e]/60 border border-[#2d2640]/50 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.3)] rounded-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(155,135,245,0.03),transparent_60%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.03),transparent_60%)]"></div>
              
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9b87f5]/30 to-transparent"></div>
              
              <div className="absolute left-0 inset-y-0 w-[2px] bg-gradient-to-b from-[#9b87f5]/60 via-[#7d6bb8]/40 to-[#0EA5E9]/60 rounded-l-xl"></div>
              
              <div className="relative px-6 py-4 flex items-center gap-6">
                <div className="flex items-center gap-5 flex-1">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#9b87f5]/20 via-[#7d6bb8]/15 to-[#0EA5E9]/20 rounded-lg blur-md"></div>
                    <div className="relative w-14 h-14 rounded-lg bg-gradient-to-br from-[#2d2640]/80 to-[#1e1a2e]/80 p-[1.5px] shadow-lg">
                      <div className="w-full h-full rounded-lg overflow-hidden border border-[#9b87f5]/20">
                        <img 
                          src={leader.avatar} 
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#0EA5E9] rounded-full border-2 border-[#0d0d15] shadow-[0_0_6px_rgba(14,165,233,0.6)]"></div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#2d2640]/60 rounded-lg flex items-center justify-center border border-[#9b87f5]/20 shadow-md">
                      <Icon name={leader.icon as any} className="text-[#b8a9f5]" size={20} />
                    </div>
                    
                    <div>
                      <h3 className="text-base font-bold text-white tracking-wide mb-0.5">
                        {leader.organization}
                      </h3>
                      <p className="text-xs text-[#9b87f5]/70 font-medium">{leader.name}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2.5 bg-[#2d2640]/40 px-3 py-2 rounded-lg border border-[#9b87f5]/20 backdrop-blur-sm">
                    <div className="w-8 h-8 bg-[#9b87f5]/15 rounded-md flex items-center justify-center border border-[#9b87f5]/25">
                      <Icon name="Calendar" className="text-[#b8a9f5]" size={14} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] text-[#9b87f5]/60 uppercase tracking-wider font-semibold">Назначен</span>
                      <span className="text-sm text-white/90 font-medium">{leader.appointmentDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 bg-[#1e2c3a]/40 px-3 py-2 rounded-lg border border-[#0EA5E9]/20 backdrop-blur-sm">
                    <div className="w-8 h-8 bg-[#0EA5E9]/15 rounded-md flex items-center justify-center border border-[#0EA5E9]/25">
                      <Icon name="Phone" className="text-[#67c3e6]" size={14} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] text-[#0EA5E9]/60 uppercase tracking-wider font-semibold">Телефон</span>
                      <span className="text-sm text-white/90 font-mono tracking-wide">{leader.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;