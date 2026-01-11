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
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e] py-16 px-4">
      <div className="w-[900px] mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
            Лидеры организаций
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#9b87f5] to-transparent mx-auto"></div>
        </header>

        <div className="flex flex-col gap-3">
          {leaders.map((leader, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden bg-[#1e1e2e]/40 border border-[#2a2a3e] backdrop-blur-xl shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/5 via-transparent to-[#0EA5E9]/5"></div>
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#9b87f5] via-[#7E69AB] to-[#0EA5E9]"></div>
              
              <div className="relative px-6 py-4 flex items-center gap-6">
                <div className="flex items-center gap-4 flex-1">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5] to-[#0EA5E9] rounded-xl blur-md opacity-50"></div>
                    <img 
                      src={leader.avatar} 
                      alt={leader.name}
                      className="relative w-14 h-14 rounded-xl border-2 border-[#9b87f5]/40 object-cover shadow-lg"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#9b87f5]/10 to-[#0EA5E9]/10 rounded-lg flex items-center justify-center border border-[#9b87f5]/20">
                      <Icon name={leader.icon as any} className="text-[#9b87f5]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-wide">
                        {leader.organization}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">{leader.name}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" className="text-[#9b87f5]/70" size={16} />
                    <span className="text-sm text-gray-300">{leader.appointmentDate}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Icon name="Phone" className="text-[#0EA5E9]/70" size={16} />
                    <span className="text-sm text-gray-300 font-mono tracking-wider">{leader.phone}</span>
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