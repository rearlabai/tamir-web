const steps = [
  {
    number: '01',
    title: 'Uygulamayı İndirin',
    description:
      'App Store veya Google Play\'den AutoLog uygulamasını ücretsiz indirin.',
  },
  {
    number: '02',
    title: 'Servisinizi Kurun',
    description:
      'Oto servis bilgilerinizi girin, müşteri ve araç ekleyin.',
  },
  {
    number: '03',
    title: 'Servis Kayıtlarını Girin',
    description:
      'Her servis için yapılan işlemleri, parçaları ve notları kaydedin.',
  },
  {
    number: '04',
    title: 'QR ile Paylaşın',
    description:
      'Müşteriniz QR kodu okutarak servis geçmişini anında görüntülesin.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            4 adımda servis takibini dijitalleştirin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent z-0" />
              )}

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
