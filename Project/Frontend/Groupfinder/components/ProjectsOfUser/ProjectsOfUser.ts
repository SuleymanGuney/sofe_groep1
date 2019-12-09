import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Project from '../../types/project';
import BasicProjectCard from '../BasicProjectCard/BasicProjectCard';
import axios from 'axios';

@ Component({
    components:{
        BasicProjectCard
    }
})
export default class ProjectsOfUser extends Vue {
    // PROPS
    @Prop({type: Number, required: true}) readonly userid_prop: number;

    // DATA
    userID: number = 0;
    projects_owner: Project[] = [];
    projects_member: Project[] = [];

    // LIFECYCLE HOOKS
    async mounted(){
        this.userID = this.userid_prop;
        try{
            const response = await axios.get(`http://localhost:4000/projects/owner/${this.userid_prop}`);
            this.projects_owner = response.data;
        } catch (err) {
            console.log(err);
        }
        try{
            const response = await axios.get(`http://localhost:4000/projects/teammember/${this.userid_prop}`);
            this.projects_member = response.data;
        } catch (err) {
            console.log(err);
        }
    }
}
