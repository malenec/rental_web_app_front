
import facade from "../apiFacade";
import { useState, useEffect } from 'react'

const About = ({ user }) => {
  const [dataFromServer, setDataFromServer] = useState("Loading...")
  useEffect(() => {
    if (user.username === '') {
      setDataFromServer("Please log in");
      return;
    }
    const url = user.roles.split(',').includes('user') ? '/api/info/user' : '/api/info/admin';
    facade.fetchData(url).then(res => {
      console.log(res);
      setDataFromServer(res.msg)
    });
  }, [user]);
  return (<>
    {/* {dataFromServer} */}
    <div className="ms-4 mt-4"><h2>Om</h2>
    <p>I carbon2count kan man kan plotte sine indkøb ind - fødevare for fødevare - og få vist den CO2 udledning man er ansvarlig for baseret på disse fødevarevalg </p>
    <p>Man skal oprette en bruger for at gøre brug af systemet.</p>
    <p>Når man er oprettet og logget ind, kan man oprette en indkøbsliste og tilføje fødevarer til denne.</p>
    <p>Der vises en umiddelbar beregning af hvad det samlede indkøb vil resultere i af CO2 udledning inddelt i kategorier af fødevaretyper såsom frugt, grøntsager, kød osv.</p>
    <p>Der er også mulighed for at se en mere specifik opdeling af årsager til udledning inddelt i kategorier såsom transport, emballage, landbrug osv.</p>
    <p>Herefter kan man både redigere og slette i sin indkøbsliste til man er tilfreds med resultatet.</p>
    <p>Visualiseringen af CO2 udledningen dette indkøb er ansvarlig for vil løbende opdateres, så den konstant er retvisende for varerne på ens liste.</p>
    <p>Dette vil give brugeren mulighed for at overveje og genoveje sine valg på et velinformeret grundlag ift konsekvenserne et givent indkøb vil have på ens personlige carbon footprint.</p>
    <p>Man kan gemme dagens indkøb, så man kan tilgå hele ens indkøbshistorik inddelt i datoerne for de gemte indkøbslister.</p>
    <p>Baseret på indholdet af de gemte indkøbslister får man vist en graf over ens stigende/faldende CO2 udledning over tid (den samlede tid man har været bruger af systemet).</p>

    </div>
  </>
  )
};

export default About