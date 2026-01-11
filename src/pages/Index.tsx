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
    <div className="min-h-screen bg-[#08080e] py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(155,135,245,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.08),transparent_50%)]"></div>
      </div>
      <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-[#9b87f5]/8 rounded-full blur-[140px] animate-pulse"></div>
      <div className="absolute bottom-20 right-1/3 w-[500px] h-[500px] bg-[#0EA5E9]/8 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="w-[900px] mx-auto relative z-10">
        <header className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#9b87f5] to-transparent mx-auto mb-2"></div>
            <h1 className="text-6xl font-extrabold text-white tracking-tight bg-gradient-to-br from-white via-[#e0d8ff] to-[#b8a9f5] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(155,135,245,0.3)]">
              Лидеры организаций
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent mx-auto mt-2"></div>
          </div>
        </header>

        <div className="flex flex-col gap-5">
          {leaders.map((leader, index) => (
            <Card 
              key={index}
              className="group relative overflow-visible bg-gradient-to-br from-[#1c1828]/95 via-[#1a1a2e]/95 to-[#16162a]/95 border border-[#2d2640]/80 backdrop-blur-3xl shadow-[0_20px_60px_-15px_rgba(155,135,245,0.2),0_0_0_1px_rgba(155,135,245,0.1)] rounded-2xl"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#9b87f5]/20 via-transparent to-[#0EA5E9]/20 rounded-2xl opacity-0 blur-sm"></div>
              
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(155,135,245,0.06),transparent_50%)] rounded-2xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.06),transparent_50%)] rounded-2xl"></div>
              
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#9b87f5]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0EA5E9]/30 to-transparent"></div>
              
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#9b87f5] via-[#7d6bb8] to-[#0EA5E9] shadow-[0_0_20px_rgba(155,135,245,0.5)] rounded-l-2xl"></div>
              
              <div className="relative px-9 py-6 flex items-center gap-8">
                <div className="flex items-center gap-6 flex-1">
                  <div className="relative group/avatar">
                    <div className="absolute -inset-3 bg-gradient-to-br from-[#9b87f5]/40 via-[#7d6bb8]/30 to-[#0EA5E9]/40 rounded-[20px] blur-xl opacity-60"></div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#9b87f5] to-[#0EA5E9] rounded-[18px] opacity-50"></div>
                    <div className="relative w-[72px] h-[72px] rounded-[16px] bg-gradient-to-br from-[#2d2640] to-[#1e1a2e] p-[2px] shadow-2xl">
                      <div className="w-full h-full rounded-[14px] overflow-hidden border-2 border-[#9b87f5]/20">
                        <img 
                          src={leader.avatar} 
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-[#0EA5E9] to-[#0c94d4] rounded-full border-[3px] border-[#08080e] shadow-[0_0_12px_rgba(14,165,233,1)]"></div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/30 to-[#0EA5E9]/30 rounded-2xl blur-md"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-br from-[#2d2640]/90 to-[#1e1a2e]/90 rounded-xl flex items-center justify-center border-2 border-[#9b87f5]/40 shadow-[0_8px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm">
                        <Icon name={leader.icon as any} className="text-[#d4c5ff] drop-shadow-[0_0_8px_rgba(155,135,245,0.6)]" size={26} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-white tracking-wide mb-1 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                        {leader.organization}
                      </h3>
                      <p className="text-xs text-[#b8a9f5]/90 font-semibold tracking-wide">{leader.name}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#9b87f5]/20 to-[#9b87f5]/5 rounded-2xl blur-md"></div>
                    <div className="relative flex items-center gap-3 bg-gradient-to-br from-[#2d2640]/60 to-[#241f36]/60 pl-3 pr-5 py-3 rounded-xl border border-[#9b87f5]/30 backdrop-blur-md shadow-[0_4px_16px_rgba(155,135,245,0.15),inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#9b87f5]/30 to-[#7d6bb8]/20 rounded-lg flex items-center justify-center border border-[#9b87f5]/40 shadow-inner">
                        <Icon name="Calendar" className="text-[#d4c5ff]" size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] text-[#9b87f5]/70 uppercase tracking-widest font-bold mb-1">Назначен</span>
                        <span className="text-[15px] text-white/95 font-semibold tracking-wide">{leader.appointmentDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#0EA5E9]/20 to-[#0EA5E9]/5 rounded-2xl blur-md"></div>
                    <div className="relative flex items-center gap-3 bg-gradient-to-br from-[#1e2c3a]/60 to-[#1a2533]/60 pl-3 pr-5 py-3 rounded-xl border border-[#0EA5E9]/30 backdrop-blur-md shadow-[0_4px_16px_rgba(14,165,233,0.15),inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#0EA5E9]/30 to-[#0c94d4]/20 rounded-lg flex items-center justify-center border border-[#0EA5E9]/40 shadow-inner">
                        <Icon name="Phone" className="text-[#7dd3f8]" size={18} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] text-[#0EA5E9]/70 uppercase tracking-widest font-bold mb-1">Телефон</span>
                        <span className="text-[15px] text-white/95 font-mono tracking-wide font-semibold">{leader.phone}</span>
                      </div>
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