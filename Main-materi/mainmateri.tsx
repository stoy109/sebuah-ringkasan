import React, { useState } from 'react';
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Moon, Sun, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const TransitionThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);
  const [showMainContent, setShowMainContent] = useState(true);
  const [currentPage, setCurrentPage] = useState('main'); // 'main', 'agama', 'pancasila'

  const handleThemeChange = () => {
    setIsDark(!isDark);
  };

  const handleConfirm = () => {
    setShowMainContent(false);
  };

  const handleBack = () => {
    if (!showMainContent) {
      setShowMainContent(true);
    }
    setCurrentPage('main');
  };

  const buttonStyles = isDark 
    ? "bg-slate-700 hover:bg-slate-600 text-white border-slate-600" 
    : "bg-slate-200 hover:bg-slate-300 text-slate-900";

  const agamaContent = `
# Agama di Indonesia

Indonesia mengakui 6 agama resmi:

1. **Islam**
 - Agama mayoritas di Indonesia
 - Sekitar 87% penduduk Indonesia

2. **Kristen Protestan**
 - Tersebar di berbagai wilayah
 - Terutama di Indonesia bagian timur

3. **Katolik**
 - Komunitas besar di berbagai wilayah
 - Memiliki sejarah panjang di Indonesia

4. **Hindu**
 - Dominan di Bali
 - Memiliki sejarah kuno di Nusantara

5. **Buddha**
 - Berkembang sejak era kerajaan
 - Peninggalan seperti Borobudur

6. **Konghucu**
 - Diakui secara resmi sejak 2000
 - Terutama dianut oleh etnis Tionghoa

Indonesia menjamin kebebasan beragama dalam Pancasila dan UUD 1945.
  `;

  const pancasilaContent = `
# Pancasila

1. **Ketuhanan Yang Maha Esa**
 - Mengakui dan menghormati berbagai agama
 - Menjamin kebebasan beribadah

2. **Kemanusiaan yang Adil dan Beradab**
 - Menghargai hak asasi manusia
 - Mengembangkan sikap toleransi

3. **Persatuan Indonesia**
 - Menjaga kesatuan bangsa
 - Menumbuhkan rasa nasionalisme

4. **Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan**
 - Mengutamakan musyawarah
 - Menghargai nilai demokrasi

5. **Keadilan Sosial bagi Seluruh Rakyat Indonesia**
 - Mewujudkan kesejahteraan sosial
 - Mengembangkan keadilan bagi seluruh rakyat
  `;

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out ${
      isDark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-black'
    }`}>
      {/* Back Button */}
      {currentPage !== 'main' && (
        <Button
          onClick={handleBack}
          className={`fixed top-4 right-4 transition-all duration-300 ${buttonStyles}`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali
        </Button>
      )}

      {/* Main Content */}
      {currentPage === 'main' && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="relative">
            {/* Initial Content */}
            <div className={`flex flex-col items-center gap-8 transition-all duration-500 ease-in-out ${
              showMainContent 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform -translate-y-8 pointer-events-none'
            }`}>
              <div className="flex items-center gap-4">
                {isDark ? (
                  <Moon className="w-6 h-6 animate-pulse" />
                ) : (
                  <Sun className="w-6 h-6 animate-spin-slow" />
                )}
                <Switch
                  checked={isDark}
                  onCheckedChange={handleThemeChange}
                  className="transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>

              <Button
                onClick={handleConfirm}
                className={`px-8 py-2 transition-all duration-300 ease-in-out transform
                  ${isDark ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-900'}
                  hover:scale-105 active:scale-95`}
              >
                Confirm
              </Button>
            </div>

            {/* Menu Buttons */}
            <div className={`flex flex-col gap-4 transition-all duration-500 ease-in-out delay-300 ${
              showMainContent 
                ? 'opacity-0 transform translate-y-8 pointer-events-none' 
                : 'opacity-100 transform translate-y-0'
            }`}>
              <Button 
                onClick={() => setCurrentPage('agama')}
                className={`px-8 py-2 min-w-[200px] transition-all duration-300 hover:scale-105 active:scale-95 ${buttonStyles}`}
              >
                Agama
              </Button>
              <Button 
                onClick={() => setCurrentPage('pancasila')}
                className={`px-8 py-2 min-w-[200px] transition-all duration-300 hover:scale-105 active:scale-95 ${buttonStyles}`}
              >
                Pancasila
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Agama Content */}
      {currentPage === 'agama' && (
        <div className={`max-w-2xl mx-auto p-8 pt-16 prose ${
          isDark ? 'prose-invert' : ''
        }`}>
          <ReactMarkdown>
            {agamaContent}
          </ReactMarkdown>
        </div>
      )}

      {/* Pancasila Content */}
      {currentPage === 'pancasila' && (
        <div className={`max-w-2xl mx-auto p-8 pt-16 prose ${
          isDark ? 'prose-invert' : ''
        }`}>
          <ReactMarkdown>
            {pancasilaContent}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default TransitionThemeSwitch;
