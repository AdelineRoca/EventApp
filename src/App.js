import "./App.css";
import Homepage from "./components/homepage/Homepage";
import EvenimenteSportive from "./components/evenimentesportive/EvenimenteSportive";
import SpectacolePentruCopii from "./components/spectacolepentrucopii/SpectacolePentruCopii";
import { Route, Routes } from "react-router-dom";
import MuzicaPop from "./components/MuzicaPop/MuzicaPop";
import MuzicaRock from "./components/MuzicaRock/MuzicaRock";
import MuzicaBluesCountryFolk from "./components/MuzicaBluesCountryFolk/MuzicaBluesCountryFolk";
import MuzicaJazz from "./components/MuzicaJazz/MuzicaJazz";
import MuzicaReggaeSoulHipHop from "./components/MuzicaReggaeSoulHipHop/MuzicaReggaeSoulHipHop";
import MuzicaClasica from "./components/MuzicaClasica/MuzicaClasica";
import MuzicaPopulara from "./components/MuzicaPopulara/MuzicaPopulara";
import Teatru from "./components/Teatru/Teatru";
import OperaOpereta from "./components/OperaOpereta/OperaOpereta";
import StandUpComedy from "./components/StandUpComedy/StandUpComedy";
import ExpozitiiVernisaje from "./components/ExpozitiiVernisaje/ExpozitiiVernisaje";
import BoneyM from "./components/MuzicaPop/PopEventsPages/BoneyM/BoneyMPage.jsx";
import JamesArthur from "./components/MuzicaPop/PopEventsPages/JamesArthur/JamesArthurPage.jsx";
import JamesBlunt from "./components/MuzicaPop/PopEventsPages/JamesBlunt/JamesBluntPage.jsx";
import ABBA from "./components/MuzicaPop/PopEventsPages/ABBA/AbbaPage.jsx";
import Mariza from "./components/MuzicaPop/PopEventsPages/Mariza/MarizaPage.jsx";
import NikosVertis from "./components/MuzicaPop/PopEventsPages/NikosVertis/NikosPage.jsx";
import Ara from "./components/MuzicaPop/PopEventsPages/Ara/AraPage.jsx";
import EdSheeran from "./components/MuzicaPop/PopEventsPages/EdSheeran/EdSheeranPage.jsx";
import PowerMetalDay from "./components/MuzicaRock/RockEventsPages/PowerMetalDay/PowerMetalDayPage.jsx";
import TheDeadDaisies from "./components/MuzicaRock/RockEventsPages/TheDeadDaisies/TheDeadDaisiesPage.jsx";
import STBJ from "./components/MuzicaRock/RockEventsPages/STBJ/STBJPage.jsx";
import BryanAdams from "./components/MuzicaRock/RockEventsPages/BryanAdams/BryanAdamsPage.jsx";
import LoreenaMcKennitt from "./components/MuzicaBluesCountryFolk/BluesCountryFolkEventPages/Loreena Mckennitt/LoreenaPage.jsx";
import MirceaBaniciu from "./components/MuzicaBluesCountryFolk/BluesCountryFolkEventPages/Baniciu/BaniciuPage.jsx";
import TrioJazz from "./components/MuzicaJazz/JazzEventPages/TrioJazz/TrioJazzPage.jsx";
import Nout from "./components/MuzicaJazz/JazzEventPages/Nout/NoutPage.jsx";
import LightningReggaeFestival from "./components/MuzicaReggaeSoulHipHop/ReggaeSoulHipHopEventPages/LightningReggaeFestival/LightningReggaeFestivalPage.jsx";
import HipHop50Live from "./components/MuzicaReggaeSoulHipHop/ReggaeSoulHipHopEventPages/HipHop50Live/HipHop50LivePage.jsx";
import Havasi from "./components/MuzicaClasica/ClassicalMusicEventPages/Havasi/HavasiPage.jsx";
import Schoenbrunn from "./components/MuzicaClasica/ClassicalMusicEventPages/Schoenbrunn/SchoenbrunnPage.jsx";
import EnnioMorricone from "./components/MuzicaClasica/ClassicalMusicEventPages/EnnioMorricone/EnnioMorriconePage.jsx";
import Origini from "./components/MuzicaPopulara/MuzicaPopularaEventPages/Origini2023/Origini2023Page.jsx";
import AndraTraditional from "./components/MuzicaPopulara/MuzicaPopularaEventPages/AndraTraditional/AndraTraditionalPage.jsx";
import Hockey from "./components/evenimentesportive/EvenimenteSportiveEventPages/Hockey/HockeyPage.jsx";
import SuperEnduro from "./components/evenimentesportive/EvenimenteSportiveEventPages/SuperEnduro/SuperEnduroPage.jsx";
import Nora from "./components/Teatru/TeatruEventPages/Nora/NoraPage.jsx";
import Habarnam from "./components/Teatru/TeatruEventPages/Habarnam/HabarnamPage.jsx";
import MestesugulVietii from "./components/Teatru/TeatruEventPages/MestesugulVietii/MestesugulVietiiPage.jsx";
import SonataDeToamna from "./components/Teatru/TeatruEventPages/SonataDeToamna/SonataDeToamnaPage.jsx";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div
        style={{ height: "50px", width: "100%", background: "light-purple" }}
      />
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/muzicapop" element={<MuzicaPop />} />
        <Route path="/muzicarock" element={<MuzicaRock />} />
        <Route
          path="/muzicabluescountryfolk"
          element={<MuzicaBluesCountryFolk />}
        />
        <Route path="/muzicajazz" element={<MuzicaJazz />} />
        <Route
          path="/muzicareggaesoulhiphop"
          element={<MuzicaReggaeSoulHipHop />}
        />
        <Route path="/muzicaclasica" element={<MuzicaClasica />} />
        <Route path="/muzicapopulara" element={<MuzicaPopulara />} />
        <Route path="/teatru" element={<Teatru />} />
        <Route path="/operaopereta" element={<OperaOpereta />} />
        <Route
          path="/spectacolepentrucopii"
          element={<SpectacolePentruCopii />}
        />
        <Route path="/standupcomedy" element={<StandUpComedy />} />
        <Route path="/expozitiivernisaje" element={<ExpozitiiVernisaje />} />
        <Route path="/evenimentesportive" element={<EvenimenteSportive />} />
        <Route path="/boneyM" element={<BoneyM />} />
        <Route path="/jamesarthur" element={<JamesArthur />} />
        <Route path="/jamesblunt" element={<JamesBlunt />} />
        <Route path="/abba" element={<ABBA />} />
        <Route path="/mariza" element={<Mariza />} />
        <Route path="/nikos" element={<NikosVertis />} />
        <Route path="/ara" element={<Ara />} />
        <Route path="/edsheeran" element={<EdSheeran />} />
        <Route path="/powermetalday" element={<PowerMetalDay />} />
        <Route path="/thedeaddaisies" element={<TheDeadDaisies />} />
        <Route path="/stbj" element={<STBJ />} />
        <Route path="/bryanadams" element={<BryanAdams />} />
        <Route path="/loreenamckennitt" element={<LoreenaMcKennitt />} />
        <Route path="/mirceabaniciu" element={<MirceaBaniciu />} />
        <Route path="/triojazz" element={<TrioJazz />} />
        <Route path="/nout" element={<Nout />} />
        <Route
          path="/lightningreggaefestival"
          element={<LightningReggaeFestival />}
        />
        <Route path="/hiphop50live" element={<HipHop50Live />} />
        <Route path="/havasi" element={<Havasi />} />
        <Route path="/schoenbrunn" element={<Schoenbrunn />} />
        <Route path="/enniomorricone" element={<EnnioMorricone />} />
        <Route path="/origini" element={<Origini />} />
        <Route path="/andratraditional" element={<AndraTraditional />} />
        <Route path="/hockey" element={<Hockey />} />
        <Route path="/superenduro" element={<SuperEnduro />} />
        <Route path="/nora" element={<Nora />} />
        <Route path="/habarnam" element={<Habarnam />} />
        <Route path="/mestesugulvietii" element={<MestesugulVietii />} />
        <Route path="/sonatadetoamna" element={<SonataDeToamna />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
