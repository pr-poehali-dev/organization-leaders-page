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
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#221F26] to-[#2D1B3D] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Лидеры организаций
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#9b87f5] to-[#0EA5E9] mx-auto rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden bg-gradient-to-br from-[#2D1F3D] to-[#1A1F2C] border-2 border-transparent bg-clip-padding backdrop-blur-sm"
              style={{
                borderImage: 'linear-gradient(135deg, #9b87f5, #0EA5E9) 1'
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#0EA5E9]"></div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#9b87f5]/20 to-[#0EA5E9]/20 rounded-lg flex items-center justify-center">
                    <Icon name={leader.icon as any} className="text-[#9b87f5]" size={24} />
                  </div>
                  <img 
                    src={leader.avatar} 
                    alt={leader.name}
                    className="w-16 h-16 rounded-lg border-2 border-[#9b87f5]/30 object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-1 tracking-wide">
                  {leader.organization}
                </h3>
                
                <div className="h-px bg-gradient-to-r from-transparent via-[#9b87f5]/30 to-transparent my-4"></div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="User" className="text-[#0EA5E9]" size={16} />
                    <p className="text-sm text-gray-300 font-medium">{leader.name}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" className="text-[#9b87f5]" size={16} />
                    <p className="text-sm text-gray-400">
                      Назначен: <span className="text-gray-300">{leader.appointmentDate}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Icon name="Phone" className="text-[#0EA5E9]" size={16} />
                    <p className="text-sm text-gray-300 font-mono tracking-wider">{leader.phone}</p>
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
