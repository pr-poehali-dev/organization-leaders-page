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
    <div className="min-h-screen bg-[#050509] py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(155,135,245,0.12),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.12),transparent_40%)]"></div>
      </div>
      
      <div className="absolute top-32 left-1/4 w-[600px] h-[600px] bg-[#9b87f5]/12 rounded-full blur-[160px]"></div>
      <div className="absolute bottom-32 right-1/4 w-[600px] h-[600px] bg-[#0EA5E9]/12 rounded-full blur-[160px]"></div>
      
      <div className="w-[900px] mx-auto relative z-10">
        <header className="text-center mb-20">
          <div className="inline-flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#9b87f5] to-[#9b87f5]"></div>
              <div className="w-2 h-2 rounded-full bg-[#9b87f5] shadow-[0_0_12px_rgba(155,135,245,0.8)]"></div>
              <div className="w-20 h-[2px] bg-gradient-to-l from-transparent via-[#0EA5E9] to-[#0EA5E9]"></div>
            </div>
            
            <h1 className="text-7xl font-black text-white tracking-tight leading-none">
              <span className="bg-gradient-to-br from-white via-[#e8e0ff] to-[#c4b5fd] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(155,135,245,0.4)]">
                Лидеры организаций
              </span>
            </h1>
            
            <div className="flex items-center gap-3">
              <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#0EA5E9] to-[#0EA5E9]"></div>
              <div className="w-2 h-2 rounded-full bg-[#0EA5E9] shadow-[0_0_12px_rgba(14,165,233,0.8)]"></div>
              <div className="w-20 h-[2px] bg-gradient-to-l from-transparent via-[#9b87f5] to-[#9b87f5]"></div>
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-6">
          {leaders.map((leader, index) => (
            <div key={index} className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#9b87f5]/10 via-transparent to-[#0EA5E9]/10 rounded-[28px] blur-xl"></div>
              
              <Card 
                className="group relative overflow-visible bg-gradient-to-br from-[#1a1625]/98 via-[#1c1a2e]/98 to-[#18182a]/98 border-2 border-[#2d2640]/90 backdrop-blur-3xl shadow-[0_24px_72px_-16px_rgba(0,0,0,0.6),0_0_0_1px_rgba(155,135,245,0.15),inset_0_1px_0_rgba(255,255,255,0.03)] rounded-[24px]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(155,135,245,0.08),transparent_60%)] rounded-[24px]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(14,165,233,0.08),transparent_60%)] rounded-[24px]"></div>
                
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#9b87f5]/60 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#0EA5E9]/40 to-transparent"></div>
                
                <div className="absolute left-0 inset-y-0 w-[4px] bg-gradient-to-b from-[#9b87f5] via-[#7d6bb8] to-[#0EA5E9] shadow-[0_0_24px_rgba(155,135,245,0.6),0_0_48px_rgba(155,135,245,0.3)] rounded-l-[24px]"></div>
                
                <div className="absolute top-3 left-3 w-16 h-16 bg-[#9b87f5]/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-3 right-3 w-16 h-16 bg-[#0EA5E9]/5 rounded-full blur-2xl"></div>
                
                <div className="relative px-10 py-7 flex items-center gap-10">
                  <div className="flex items-center gap-7 flex-1">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-br from-[#9b87f5]/50 via-[#7d6bb8]/40 to-[#0EA5E9]/50 rounded-[28px] blur-2xl opacity-70"></div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-[#9b87f5]/60 via-[#8b7ac7]/50 to-[#0EA5E9]/60 rounded-[24px] blur-md"></div>
                      <div className="absolute -inset-[2px] bg-gradient-to-br from-[#9b87f5] to-[#0EA5E9] rounded-[22px]"></div>
                      
                      <div className="relative w-20 h-20 rounded-[20px] bg-gradient-to-br from-[#2d2640] via-[#28253a] to-[#1e1a2e] p-[3px] shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.1)]">
                        <div className="w-full h-full rounded-[17px] overflow-hidden border-[2.5px] border-[#9b87f5]/30 shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]">
                          <img 
                            src={leader.avatar} 
                            alt={leader.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="absolute -top-[6px] -right-[6px] flex items-center justify-center">
                        <div className="absolute w-[22px] h-[22px] bg-[#0EA5E9]/40 rounded-full blur-sm"></div>
                        <div className="relative w-[18px] h-[18px] bg-gradient-to-br from-[#0EA5E9] to-[#0c8fd0] rounded-full border-[3.5px] border-[#050509] shadow-[0_0_16px_rgba(14,165,233,1),0_0_8px_rgba(14,165,233,0.8)]"></div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/40 to-[#0EA5E9]/40 rounded-[20px] blur-xl"></div>
                        <div className="relative w-[60px] h-[60px] bg-gradient-to-br from-[#2d2640]/95 via-[#28253a]/95 to-[#1e1a2e]/95 rounded-[16px] flex items-center justify-center border-[2.5px] border-[#9b87f5]/50 shadow-[0_12px_24px_rgba(0,0,0,0.5),inset_0_2px_0_rgba(255,255,255,0.1),inset_0_-2px_8px_rgba(0,0,0,0.3)] backdrop-blur-md">
                          <Icon name={leader.icon as any} className="text-[#e0d8ff] drop-shadow-[0_0_12px_rgba(155,135,245,0.8)]" size={30} />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-[22px] font-black text-white tracking-wide mb-1.5 leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                          {leader.organization}
                        </h3>
                        <p className="text-[13px] text-[#c4b5fd]/95 font-bold tracking-wider">{leader.name}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-br from-[#9b87f5]/25 to-[#7d6bb8]/15 rounded-[20px] blur-lg"></div>
                      <div className="relative flex items-center gap-4 bg-gradient-to-br from-[#2d2640]/80 via-[#28253a]/75 to-[#241f36]/80 pl-4 pr-6 py-4 rounded-[16px] border-[2px] border-[#9b87f5]/40 backdrop-blur-xl shadow-[0_8px_24px_rgba(155,135,245,0.2),inset_0_2px_0_rgba(255,255,255,0.08),inset_0_-2px_8px_rgba(0,0,0,0.2)]">
                        <div className="relative">
                          <div className="absolute inset-0 bg-[#9b87f5]/30 rounded-xl blur-md"></div>
                          <div className="relative w-11 h-11 bg-gradient-to-br from-[#9b87f5]/40 to-[#7d6bb8]/25 rounded-xl flex items-center justify-center border-[2px] border-[#9b87f5]/50 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.2)]">
                            <Icon name="Calendar" className="text-[#e8e0ff] drop-shadow-[0_0_8px_rgba(155,135,245,0.6)]" size={20} />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] text-[#9b87f5]/80 uppercase tracking-[0.15em] font-black">Назначен</span>
                          <span className="text-[16px] text-white font-bold tracking-wide leading-none">{leader.appointmentDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-br from-[#0EA5E9]/25 to-[#0c8fd0]/15 rounded-[20px] blur-lg"></div>
                      <div className="relative flex items-center gap-4 bg-gradient-to-br from-[#1e2c3a]/80 via-[#1c2836]/75 to-[#1a2533]/80 pl-4 pr-6 py-4 rounded-[16px] border-[2px] border-[#0EA5E9]/40 backdrop-blur-xl shadow-[0_8px_24px_rgba(14,165,233,0.2),inset_0_2px_0_rgba(255,255,255,0.08),inset_0_-2px_8px_rgba(0,0,0,0.2)]">
                        <div className="relative">
                          <div className="absolute inset-0 bg-[#0EA5E9]/30 rounded-xl blur-md"></div>
                          <div className="relative w-11 h-11 bg-gradient-to-br from-[#0EA5E9]/40 to-[#0c8fd0]/25 rounded-xl flex items-center justify-center border-[2px] border-[#0EA5E9]/50 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.2)]">
                            <Icon name="Phone" className="text-[#a8e0f7] drop-shadow-[0_0_8px_rgba(14,165,233,0.6)]" size={20} />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] text-[#0EA5E9]/80 uppercase tracking-[0.15em] font-black">Телефон</span>
                          <span className="text-[16px] text-white font-mono font-bold tracking-wide leading-none">{leader.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;