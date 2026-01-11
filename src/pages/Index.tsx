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
    <div className="min-h-screen bg-[#0a0a0f] py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/5 via-transparent to-[#0EA5E9]/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9b87f5]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-[120px]"></div>
      
      <div className="w-[900px] mx-auto relative z-10">
        <header className="text-center mb-14">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight bg-gradient-to-r from-white via-[#e0d8ff] to-white bg-clip-text text-transparent">
            Лидеры организаций
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#9b87f5] to-transparent mx-auto"></div>
        </header>

        <div className="flex flex-col gap-4">
          {leaders.map((leader, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-[#1a1625]/90 via-[#1e1a2e]/90 to-[#1a1a2e]/90 border border-[#2d2640]/60 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(155,135,245,0.12)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/0 via-[#9b87f5]/5 to-[#0EA5E9]/0 opacity-0"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.03),transparent_70%)]"></div>
              
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9b87f5]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0EA5E9]/20 to-transparent"></div>
              
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#9b87f5] via-[#8b7ac7] to-[#0EA5E9] shadow-[0_0_12px_rgba(155,135,245,0.6)]"></div>
              
              <div className="relative px-8 py-5 flex items-center gap-8">
                <div className="flex items-center gap-5 flex-1">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-[#9b87f5] via-[#8b7ac7] to-[#0EA5E9] rounded-2xl blur-lg opacity-40"></div>
                    <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#2d2640] to-[#1e1a2e] p-0.5 shadow-xl">
                      <img 
                        src={leader.avatar} 
                        alt={leader.name}
                        className="w-full h-full rounded-xl object-cover border border-[#9b87f5]/30"
                      />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#0EA5E9] rounded-full border-2 border-[#0a0a0f] shadow-[0_0_8px_rgba(14,165,233,0.8)]"></div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/20 to-[#0EA5E9]/20 rounded-xl blur-sm"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-[#2d2640]/80 to-[#1e1a2e]/80 rounded-xl flex items-center justify-center border border-[#9b87f5]/30 shadow-lg backdrop-blur-sm">
                        <Icon name={leader.icon as any} className="text-[#c4b5fd]" size={22} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-wide mb-0.5 leading-tight">
                        {leader.organization}
                      </h3>
                      <p className="text-xs text-[#9b87f5]/80 font-medium">{leader.name}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3 bg-[#2d2640]/30 px-4 py-2.5 rounded-xl border border-[#9b87f5]/20 backdrop-blur-sm">
                    <div className="w-9 h-9 bg-gradient-to-br from-[#9b87f5]/20 to-[#9b87f5]/5 rounded-lg flex items-center justify-center border border-[#9b87f5]/30">
                      <Icon name="Calendar" className="text-[#c4b5fd]" size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#9b87f5]/60 uppercase tracking-wider font-semibold mb-0.5">Назначен</span>
                      <span className="text-sm text-white font-medium">{leader.appointmentDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-[#1e2c3a]/30 px-4 py-2.5 rounded-xl border border-[#0EA5E9]/20 backdrop-blur-sm">
                    <div className="w-9 h-9 bg-gradient-to-br from-[#0EA5E9]/20 to-[#0EA5E9]/5 rounded-lg flex items-center justify-center border border-[#0EA5E9]/30">
                      <Icon name="Phone" className="text-[#67c3e6]" size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#0EA5E9]/60 uppercase tracking-wider font-semibold mb-0.5">Телефон</span>
                      <span className="text-sm text-white font-mono tracking-wider">{leader.phone}</span>
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